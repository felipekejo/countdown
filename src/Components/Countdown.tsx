import { useCountdown } from '../Hooks/useCountdown';
import { ShowCounter } from './ShowCounter';

type CountdownTimerProps = {
  targetDate:string
}

export function CountdownTimer({ targetDate }:CountdownTimerProps){
  const [days, hours, minutes, seconds] = useCountdown(targetDate);


    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  
};