import { zonedTimeToUtc } from 'date-fns-tz';
import { useEffect, useState } from 'react';

type useCountdownProps = {
  targetDate:string;
  timeZone:string
}

const useCountdown = ({targetDate,timeZone}:useCountdownProps) => {

 
  const znDate = zonedTimeToUtc(targetDate,timeZone)
 
  const countDownDate = new Date(znDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown:number) => {
  // calculate time left
  const daysNumber = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hoursNumber = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesNumber = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const secondsNumber = Math.floor((countDown % (1000 * 60)) / 1000);

  const days = String(daysNumber).padStart(2,'0')
  const hours = String(hoursNumber).padStart(2,'0')
  const minutes = String(minutesNumber).padStart(2,'0')
  const seconds = String(secondsNumber).padStart(2,'0')


  return [days, hours, minutes, seconds];
};

export { useCountdown };

