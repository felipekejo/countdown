import type { NextPage } from 'next'
import Image from 'next/image'
import backgroundImg from '../../public/saopaulo.jpg'
import { CountdownTimer } from '../Components/Countdown'
import { Background, Container, Content } from '../styles/Home'

const Home: NextPage = () => { 

  return (
        <Container>
          <Background>
            <Image
              alt="Sao Paulo"
              src={backgroundImg}
              layout="fill"
              objectFit="cover"
              quality={100}
              objectPosition="center"
            />
          </Background>
          <Content>
          <CountdownTimer />

          </Content>
        </Container>
      
    
  )
}

export default Home
