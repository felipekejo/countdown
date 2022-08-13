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
        <DateTimeDisplay value={days} type={'Days'}/>
        
        <DateTimeDisplay value={hours} type={'Hours'} />
        
        <DateTimeDisplay value={minutes} type={'Mins'} />
        
        <DateTimeDisplay value={seconds} type={'Seconds'} />
      </Content>
    </Container>
  );
};