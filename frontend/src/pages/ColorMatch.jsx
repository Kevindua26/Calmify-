import React from 'react'
import GameBoard from '../components/ColorMatch/GameBoard'
import '../components/ColorMatch/block.css';

const ColorMatch = () => {
  return (
    <div className='flex flex-col text-center container mx-auto justify-center h-[80vh]'>
    <h1 className='font-semibold montserrat text-3xl'>Match correct colors</h1>
    <GameBoard/>
  </div>
  )
}

export default ColorMatch