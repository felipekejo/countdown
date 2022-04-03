import styled from "styled-components";

export const Container = styled.div`
padding: 0.5rem;
max-width:500px
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ebebeb;
  text-decoration: none;
  color: #000;  
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  svg{
    font-size: xx-large;
  }
 
`
export const Separator = styled.p`
    margin:0 0 21px 0;
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.5rem;
`