import { ShowCounter } from "../ShowCounter";
import { Container } from "./styles";


export function CountdownTimer(){





    return (
      <Container>
      <ShowCounter
        targetDate="2022-06-26 22:20"
        icon="departure"
        timeZone="Australia/Adelaide"
      />
       <ShowCounter
        targetDate="2022-06-27 15:50"
        icon="arrival"
        timeZone="America/Sao_Paulo"

      />

    </Container>
    );
  
};