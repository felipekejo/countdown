import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import { BackgroundImage } from '../Components/BackgroundImage'
import { CountdownTimer } from '../Components/Countdown'
import { Background, Container, Content } from '../styles/Home'
import { listLogos } from '../utils/listLogos'
import {Howl, Howler} from 'howler';

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
  // useEffect(()=>{
  //   window.addEventListener("DOMContentLoaded", event => {
  //     console.log("play")
  //     const audio = document.querySelector<HTMLAudioElement>("audio");
  //     if (audio!== null) {
  //       audio.volume = 0.2;
  //       audio.play();
  //     }
      
  //   });
  // },[])

  // useEffect(()=>{
  //   var sound = new Howl({
  //     src: ["Kiroro-NagaiAida.mp3"],
  //     autoplay: true,
  //     loop: true,
  //     volume: 0.5,
  //   });
  //   console.log("tocando")
  //   sound.play();
  // },[])



  return (
    <Container>
      
      <Background>
        <BackgroundImage
          image={listLogos[currentSlide]}
        />

      </Background>
      <Content>
        <CountdownTimer />

      </Content>
      {/* <audio autoPlay controls src="Kiroro-NagaiAida.mp3"></audio> */}
    </Container>


  )
}

export default Home
