import styled from "styled-components";



export const Content = styled.div`
    @media (max-width: 500px) {
      max-width:90px  
    }
    @media (max-width: 425px) {
      max-width:80px;
    }
    @media (max-width: 375px) {
      max-width:70px
    }
    @media (max-width: 320px) {
      max-width:60px
    }
  padding: 0 1.5rem 0 1.5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 115px;
  span{
    @media (max-width: 500px) {
    font-size: 0.9rem;
    line-height: 1.1rem;
    }
    @media (max-width: 425px) {
      font-size: 0.8rem;
      line-height: 1rem;
    }
    @media (max-width: 375px) {
      font-size: 0.7rem;
      line-height: 0.9rem;
    }
    @media (max-width: 320px) {
      font-size: 0.6rem;
      line-height: 0.8rem;
    }
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1.25rem;

  }
  p{
    @media (max-width: 500px) {
      font-size: 2.5rem;
      line-height: 3rem;
    }
    @media (max-width: 425px) {
      font-size: 2.25rem;
      line-height: 2.75rem;
    }

    @media (max-width: 375px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }
    @media (max-width: 320px) {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }
    margin:0;
    font-size: 3rem;
    line-height: 4rem;
  }
`