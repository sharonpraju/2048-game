import React from 'react'
import './square.css'

function Square({value}) {
  return (
    <input className='square border-none rounded text-center' type='text' readOnly='true' value={value}/>
  )
}

export default Square