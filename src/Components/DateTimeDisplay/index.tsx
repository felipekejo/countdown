import { Content } from "./styles";

type DateTimeDisplayProps = {
  value:string;
  type:string;
}


export function DateTimeDisplay({ value, type }:DateTimeDisplayProps){
  return (
    <Content className='countdown'>
      <p>{value}</p>
      <span>{type}</span>
    </Content>
  );
};

