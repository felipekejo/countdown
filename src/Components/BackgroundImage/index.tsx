import Image, { StaticImageData } from "next/image";

interface BackgroundImageProps {
  image: {
    img: StaticImageData
  }
}

export function BackgroundImage(image: BackgroundImageProps) {
  return (
    <Image
      alt='sp'
      src={image.image.img}
      layout="fill"
      objectFit="contain"
      quality={100}
      objectPosition="center"
    />
  )
}