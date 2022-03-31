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
              alt="Mountains"
              src={backgroundImg}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </Background>
          <Content>
          <CountdownTimer targetDate={'2022-06-26 22:20'} />
          </Content>
        </Container>
      
    
  )
}

export default Home
