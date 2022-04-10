import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width:100vw;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
`;


interface SliderTrackProps {
  responsive: {
    translate: number,
    transition: number
  },
  width: number
}
const autoScroll = keyframes`
from {
  transform: translateX(100%);
  }
to{
  transform: translateX(-100%);
}
`;

export const SliderTrack = styled.div<SliderTrackProps>`
  display: flex;
  width: ${props => props.width}px;
  height:100%;
  position: relative;
  /* animation: ${autoScroll} 3s linear infinite; */

`;

export const Logo = styled.div`
background-image:'../'
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 100px;
  img {
   
    
     }
`;