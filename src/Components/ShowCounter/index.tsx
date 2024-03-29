import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { useCountdown } from "../../Hooks/useCountdown";
import { DateTimeDisplay } from "../DateTimeDisplay";
import { Container, Content } from "./styles";

type ShowCounterProps = {
  targetDate: string;
  icon:"departure"|"arrival";
  timeZone:string
}

const icons={
  departure: <FaPlaneDeparture />,
  arrival: <FaPlaneArrival/>
}

export function ShowCounter({ icon, targetDate,timeZone }:ShowCounterProps){
  const [days, hours, minutes, seconds] = useCountdown({targetDate,timeZone});



  return (
    <Container>
      <Content>         
        <DateTimeDisplay value={days} type={'Dias'}/>
        
        <DateTimeDisplay value={hours} type={'Horas'} />
        
        <DateTimeDisplay value={minutes} type={'Mins'} />
        
        <DateTimeDisplay value={seconds} type={'Segundos'} />
      </Content>
    </Container>
  );
};