import React, { useEffect, useState } from 'react'


function Counter() {

    let isPause = false;
    const [num, setNum] = useState(0);


    const add = (e)=>{
        if(!isPause)
        setNum(e=>num+1);
    }
    
    const sub = (e)=>{
        if(!isPause)
        if(num>0){
            setNum(e=>num-1);
        }else{
            // alert("Cannot substract below Zero")
        }
    }

    const reset = (e)=>{
        if(!isPause)
        setNum(e=>0)
    }
//      Add, Sun, Reset

    const pause = (e)=>{
        isPause = true
    }
    const resume = (e)=>{
        isPause = false
    }
//      Pause, Resume

    const countDown = ()=>{
        if(!isPause)
            var counter = 0;
        for(let i=num; i>=0; i--){
            (function(index){
                setTimeout(()=>{
                    setNum(e => index)
                }, 1000 * counter)
            })(i)
            counter++;
        }
    }
    
    const countUp = ()=>{
        if(!isPause)
            var counter = 0;
        for(let i=num; i<10; i++){
            (function(index){
                setTimeout(()=>{
                    setNum(e => num+1)
                }, 1000 * counter)
            })(i)
            counter++;
        }
    }
//      CountDown, CountUp

    const rNumInjector = ()=>{
        if(!isPause){
            let rnVal = (Math.round(Math.random() * 10)*10);
            setNum(e=> rnVal)
        }

    }
//      RandomValueInjector


  return (
    <div>

    <h3>Counter</h3>

    <h1>{num}</h1>

    <div>
    <button onClick={add}>ADD</button>
    <button onClick={sub}>SUB</button>
    <button onClick={reset}>Reset</button>
    </div>

    <div>
    <button onClick={pause}>Pause</button>
    <button onClick={resume}>Resume</button>
    </div>

    <div>
    <button onClick={countDown}>Count Down</button>
    <button onClick={countUp}>Count Up</button>
    </div>

    <div>
    <button onClick={rNumInjector}>Random Number</button>
    </div>
    
      
    </div>
  )
}

export default Counter
