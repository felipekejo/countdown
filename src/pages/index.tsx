import type { NextPage } from 'next'
import Image from 'next/image'
import backgroundImgCasamento from '../../public/casamento.jpg'
import backgroundImgFoz from '../../public/foz.jpg'
import backgroundImgMercadao from '../../public/mercadao.jpg'
import backgroundImgOkinawa from '../../public/okinawa.jpg'
import { CountdownTimer } from '../Components/Countdown'
import { Background, Container, Content } from '../styles/Home'



const listLogos = [
  {
    name: "foz",
    img: backgroundImgFoz
  },
  {
    name: "RJ",
    img: backgroundImgMercadao
  },
  {
    name: "SP",
    img: backgroundImgCasamento
  }
]

const Home: NextPage = () => {

  return (
    <Container>
      <Background>
        {/* <Carousel listLogos={listLogos}/> */}
        <Image
          alt='sp'
          src={backgroundImgOkinawa}
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
