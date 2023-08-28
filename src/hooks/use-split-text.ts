import { useState, ChangeEvent } from 'react'

type Out = {
  handleGenerate: () => void
  inputText: string
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  outputText: string
}

export default function useSplitText(): Out {
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

  return { handleGenerate, inputText, handleInputChange, outputText }
}
