import { styled } from 'styled-components'

import Img from '../assets/img.gif'

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 10px 68px;
`

const Text = styled.article`
  z-index: 1;
  color: #637498;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 40px;
  max-width: 620px;
  margin-top: 100px;
  width: 70%;
  backdrop-filter: blur(8px);
  animation: text 0.8s 0.6s ease backwards;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    top: 0;
    left: 0;
    animation: line 0.8s 0.6s ease backwards;

    @keyframes line {
      0% {
        right: 0;
        width: 100%;
        opacity: 0;
      }
    }
  }

  @include sm {
    padding: 20px;
    margin: 90px 0 40px 0;
  }

  @keyframes text {
    0% {
      opacity: 0;
      transform: translateX(200px);
    }
  }
`

const PreTitle = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 16px;
  color: #637498;
`

const Description = styled.p`
  letter-spacing: 0.5px;
  font-size: 16px;
  line-height: 26px;

  @include sm {
    font-size: 14px;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 2px;
  margin-bottom: 24px;
  font-size: 40px;
  color: #637498;

  @include sm {
    margin-bottom: 16px;
    font-size: 28px;
  }
`

const Image = styled.figure`
  width: 100%;
  height: 100%;
  transform: translatey(100px);
  overflow: hidden;
  animation: image 3s 1s ease backwards;

  @include sm {
    height: 480px;
    width: 70%;
    transform: translatey(80px);
    right: -6%;
  }

  @keyframes image {
    0% {
      opacity: 0;
      transform: translatey(200px);
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0%;
    top: 100%;
    background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
    opacity: 1;
    left: 0;
  }

  &:before {
    animation: imageBefore 1s 0.2s ease backwards;

    @keyframes imageBefore {
      0% {
        height: 100%;
        top: 0;
      }
    }
  }

  &:after {
    background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
    height: 100%;
    top: 0;
    opacity: 0.2;
  }

  img {
    width: 100%;
    height: 100%;
  }
`

const Wrapper = styled.header`
  @mixin sm {
    @media screen and (max-width: 799px) {
      @content;
    }
  }

  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 40px;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  font-family: 'Raleway', sans-serif;
  margin-bottom: 159px;

  @include sm {
    padding: 0 20px;
  }
`

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <Text>
          <PreTitle>Split</PreTitle>
          <Title>Split Ledger</Title>
          <Description>
            This application was designed with the purpose of sorting a
            text-based report, identifying occurrences of <strong>H010</strong>{' '}
            and <strong>H020</strong>. The process involves reorganizing these
            occurrences sequentially, where each pair of <strong>H010</strong>{' '}
            and <strong>H020</strong> is placed one below the other. The
            application will examine all mentioned instances and, upon
            encountering the first occurrence of <strong>H020</strong>, will
            position it immediately below the first occurrence of{' '}
            <strong>H010</strong>. This pattern will be maintained until all
            occurrences are organized. An illustrative gif is located on the
            side, showcasing the process. While the application currently
            focuses solely on these two occurrences, I am available for future
            developments. Please feel free to get in touch with me via email:{' '}
            <a href="mailto:jhonatas.fender@gmail.com">
              jhonatas.fender@gmail.com
            </a>
            , or through my LinkedIn profile:{' '}
            <a
              href="https://www.linkedin.com/in/jhonatasfender/"
              target="_blank"
            >
              https://www.linkedin.com/in/jhonatasfender/
            </a>
          </Description>
        </Text>

        <Image>
          <img src={Img} alt="" />
        </Image>
      </Content>
    </Wrapper>
  )
}
