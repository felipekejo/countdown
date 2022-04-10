import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { Container, Logo, SliderTrack } from './styles';

interface ListLogo {
  img: StaticImageData;

  name: string;
}

interface CarouselProps {
  listLogos: ListLogo[];
}

interface Translate{
  translate:number
}

export function Carousel({ listLogos }: CarouselProps) {
  const [width, setWidth] =useState(0);
	
  const countLogo = listLogos.length;
  const[responsive, useResponsive]=useState({translate:0,transition:0.45})
  useEffect(() => {
    setWidth(window.innerWidth*countLogo);
  },[countLogo]);
  console.log(width)



  return (
    <Container>
      <SliderTrack responsive={responsive} width={width}>
        {listLogos.map(logo => (
          <Logo key={logo.name}>
            <Image   alt="Sao Paulo"
              src={logo.img}
              layout="responsive"
              objectFit="cover"
              quality={100}
              objectPosition="center"/>            
          </Logo>
        ))}
      </SliderTrack>
    </Container>
  );
}