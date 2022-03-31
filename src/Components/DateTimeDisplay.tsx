import React from 'react';


type DateTimeDisplayProps = {
  value:string;
  type:string;
}


export function DateTimeDisplay({ value, type }:DateTimeDisplayProps){
  return (
    <div className='countdown'>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

