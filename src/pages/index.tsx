import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Casamento from '../../public/casamento.jpg'
import Mercadao from '../../public/mercadao.jpg'
import NSW from '../../public/NSW.jpg'
import Okinawa from '../../public/okinawa.jpg'
import OperaHouse from '../../public/operahouse.jpg'
import { BackgroundImage } from '../Components/BackgroundImage'
import { CountdownTimer } from '../Components/Countdown'
import { Background, Container, Content } from '../styles/Home'


export const listLogos = [

  {
    img: OperaHouse
  },
  {
    img: Casamento
  },

  {
    img: Mercadao
  },
  {
    img: Okinawa
  },
  {
    img: NSW
  },
]




const Home: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === listLogos.length ? 0 : prev + 1;
      });
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container>
      <Background>
        {/* <Carousel listLogos={listLogos}/> */}
        <BackgroundImage
          image={listLogos[currentSlide]}
        />

      </Background>
      <Content>
        <CountdownTimer />

      </Content>
    </Container>


  )
}

export default Home
