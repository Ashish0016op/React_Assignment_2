import React, { useState } from 'react'

const CounterPage = () => {
    const [count,setCount]=useState(0);
  return (
    <div className='mt-28 bg-red-400 w-[300px] h-[250px] m-auto rounded-lg'>
        <div className='pt-9'>
            <h1 className='text-white'>{count}</h1>
            <div className='flex flex-row gap-5 justify-center mt-7'>
                <button className='bg-white w-[100px] h-[30px]' onClick={()=>setCount(count+1)}>Increment</button>
                <button className='bg-white w-[100px] h-[30px]' onClick={()=>setCount(count-1)}>Decrement</button>
            </div>
        </div>
    </div>
  )
}

export default CounterPage