import type { NextPage } from 'next'
import { CountdownTimer } from '../Components/Countdown'

const Home: NextPage = () => {

 

  return (
        <div>
          <h1>Countdown Timer</h1>
          <CountdownTimer targetDate={'2022-06-26 22:20'} />
        </div>
      
    
  )
}

export default Home
