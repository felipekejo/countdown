import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { BackgroundImage } from '../Components/BackgroundImage'
import { CountdownTimer } from '../Components/Countdown'
import { Background, Container, Content } from '../styles/Home'
import { listLogos } from '../ultils/listLogos'







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
