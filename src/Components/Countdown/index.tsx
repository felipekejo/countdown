import { ShowCounter } from "../ShowCounter";
import { Container } from "./styles";


export function CountdownTimer() {





  return (
    <Container>
      <h1>Encontro da família Kurosaka</h1>

      
      
        <ShowCounter
          targetDate="2022-09-17 08:00"
          icon="arrival"
          timeZone="America/Sao_Paulo"

        />
      

    </Container>
  );

};