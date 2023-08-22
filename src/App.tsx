import { ChangeEvent, useState } from 'react'
import { styled } from 'styled-components'

import GlobalStyles from './styles/global'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  box-shadow: 0 0 5.1rem 2.1rem rgba(0, 0, 0, 0.22);
  border-radius: 1rem;
  margin: 7rem;
  padding: 4rem;
  background-color: #0d1b2a;
`

const TextArea = styled.textarea`
  width: 49%;
  height: 80rem;
  padding: 2rem;
  box-sizing: border-box;
  border: 0.2rem solid #ccc;
  border-radius: 0.4rem;
  background-color: #f8f8f8;
  font-size: 1.6rem;
  resize: none;
  overflow: auto;
  white-space: pre;
`

const Button = styled.button`
  width: 100%;
  height: 5rem;
  background-image: linear-gradient(
    92.88deg,
    #455eb5 9.16%,
    #5643cc 43.89%,
    #673fd7 64.72%
  );
  border-radius: 0.8rem;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: 'Inter UI', 'SF Pro Display', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 0.3rem 0.8rem;
  transition: all 0.5s;
  user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
  }
`

function App() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const generateOutputText = (inputLines: string[]) => {
    const h010Records: string[] = []
    const h020Records: string[] = []

    for (const line of inputLines) {
      if (line.startsWith('|H010|')) {
        h010Records.push(line)
      } else if (line.startsWith('|H020|')) {
        h020Records.push(line)
      }
    }

    const h010_h020Records = h010Records.flatMap((h010Line, index) => [
      h010Line,
      h020Records[index] || '',
    ])

    return [
      ...inputLines.slice(0, 3),
      ...h010_h020Records,
      ...inputLines.slice(-1),
    ].join('\n')
  }

  const handleGenerate = () => {
    const lines = inputText.split('\n').filter(Boolean)
    const newOutputText = generateOutputText(lines)
    console.log(newOutputText)
    setOutputText(newOutputText)
  }

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value)
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <Button onClick={handleGenerate}>Generate</Button>
        <TextArea value={inputText} onChange={handleInputChange} />
        <TextArea value={outputText} readOnly />
      </Container>
    </>
  )
}

export default App
