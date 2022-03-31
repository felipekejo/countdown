import { DateTimeDisplay } from "../DateTimeDisplay";
import { Container, Content, Separator } from "./styles";

type ShowCounterProps = {
  days: string;
  hours:string;
  minutes:string;
  seconds:string;
}

export function ShowCounter({ days, hours, minutes, seconds }:ShowCounterProps){
  return (
    <Container>
      <Content>
        <DateTimeDisplay value={days} type={'Days'}/>
        <Separator>:</Separator>
        <DateTimeDisplay value={hours} type={'Hours'} />
        <Separator>:</Separator>
        <DateTimeDisplay value={minutes} type={'Mins'} />
        <Separator>:</Separator>
        <DateTimeDisplay value={seconds} type={'Seconds'} />
      </Content>
    </Container>
  );
};