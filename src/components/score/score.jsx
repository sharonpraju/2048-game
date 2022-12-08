import React from 'react'

function Score({highestScore, currentScore}) {
  return (
    <div className='text-start'>
        <div className='mt-2'><b>Highest Score : </b> {highestScore}</div>
        <div className='mt-2'><b>Current Score : </b> {currentScore}</div>
    </div>
  )
}

export default Score