import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col bg-[#12263A] overflow-x-hidden items-center app'>

        <h1 className='text-[#F4EDEA]  text-center mt-[40px] mb-[20px] text-4xl font-bold mx-auto'>RANDOM GIFS 🫕</h1>

        <div className='flex flex-col w-full items-center'>
          <Random />
          <Tag />
        </div>
    </div>
  )
}

export default App
