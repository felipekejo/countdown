import { DateTimeDisplay } from "./DateTimeDisplay";

type ShowCounterProps = {
  days: string;
  hours:string;
  minutes:string;
  seconds:string;
}

export function ShowCounter({ days, hours, minutes, seconds }:ShowCounterProps){
  return (
    <div className="show-counter">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'}/>
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} />
      </a>
    </div>
  );
};