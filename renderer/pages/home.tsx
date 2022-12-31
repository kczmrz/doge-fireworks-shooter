import React, { useEffect } from 'react';
import Head from 'next/head';
import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import { Fireworks } from '@fireworks-js/react'
import type { FireworksHandlers } from '@fireworks-js/react'
import { useRef } from 'react';
import Image from 'next/image';
import { imgs } from '../images/images';

function Home() {
const [clickerCounter, setClickerCounter] = useState<number>(0);
/* Start Fireworks */
  const ref = useRef<FireworksHandlers>(null);
  const triggerFireworks = () => {
    if (!ref.current) return
    if (ref.current.isRunning) {
      ref.current.stop()
    } else {
      ref.current.start()
    }
  }



  /*Timer */
  const [seconds, setSeconds] = useState<number>(4);
  const [TimerActivity, setTimerActivity] = useState<boolean>(false);

 
 useEffect(() => {
   let interval;
   let timeout;
   if(TimerActivity) {
     interval = setInterval(()=> {
          setSeconds(seconds => seconds - 0.01);
         
     }, 10);

     timeout = setTimeout(() => {
      setTimerActivity(false);
      ref.current.stop();
    }, 4000);
   
}


   return ()=> clearInterval(interval)
 }, [TimerActivity]);



  /* Trigger button */
  const triggerBtn = () => {
   setSeconds(4);
   setTimerActivity(!TimerActivity)
   triggerFireworks();
   setClickerCounter(clickerCounter + 1);
  }
  

  return (
    <React.Fragment>
      <Head>
        <title>Doge Fireworks Shooter</title>
      </Head>
      
      <div className='grid grid-col-1 h-screen text-2xl w-full text-center'>
      <div className='h-96'>
        
      <Fireworks autostart={false} ref={ref}
      options={{
        rocketsPoint: {
          min: 0,
          max: 100
        }, 
        intensity: 35
        }}
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '60%',
        position: 'fixed',
        background: 'transparent'
      }} />
      </div>
      <div className='w-1/4 fixed right-2 bottom-16'> 
      {TimerActivity
        ? <Image src={imgs.doge}/>
         :<Image src={imgs.doge2}/>}
      </div>
      <p className='text-pink-400'> Fired fireworks: {clickerCounter}</p>
      <div className='fixed bottom-0 w-full justify-center py-8 '>
      {TimerActivity
        ? <span>Happy New Year! </span>
        : <button className='btn-blue' onClick={triggerBtn}>Launch a fireworks!</button>
      }
      <ProgressBar counter={seconds * 25}/>
      </div>
     
      </div>
    </React.Fragment>
  );
}

export default Home;
