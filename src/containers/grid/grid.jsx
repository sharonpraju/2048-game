import React, { useState } from 'react';
import Square from '../../components/square/square';
import Score from '../../components/score/score';
import {swipeRight, swipeLeft, swipeUp, swipeDown} from '../../helpers/gameLogic';


function Grid() {

  let initial_game = {
    '11': '2',
    '12': '',
    '13': '',
    '14': '',
    '21': '',
    '22': '',
    '23': '',
    '24': '',
    '31': '',
    '32': '',
    '33': '2',
    '34': '',
    '41': '',
    '42': '',
    '43': '',
    '44': ''
  }
  
  const [game, setGame] = useState(initial_game);

  return (
    <div className='col-12 h-100 container d-flex justify-content-center align-items-center'>
      <div>
        <Score
          highestScore={0}
          currentScore={0}
        />
        <div className='row gap-1 p-0 m-0 mt-3'>
          <Square value={game["11"]} />
          <Square value={game["12"]} />
          <Square value={game["13"]} />
          <Square value={game["14"]} />
        </div>
        <div className='row gap-1 p-0 m-0 mt-1'>
          <Square value={game["21"]} />
          <Square value={game["22"]} />
          <Square value={game["23"]} />
          <Square value={game["24"]} />
        </div>
        <div className='row gap-1 p-0 m-0 mt-1'>
          <Square value={game["31"]} />
          <Square value={game["32"]} />
          <Square value={game["33"]} />
          <Square value={game["34"]} />
        </div>
        <div className='row gap-1 p-0 m-0 mt-1'>
          <Square value={game["41"]} />
          <Square value={game["42"]} />
          <Square value={game["43"]} />
          <Square value={game["44"]} />
        </div>
        <button className="btn btn-secondary mt-3 me-3" type="button" onClick={()=>swipeRight(game, setGame)}>Swipe Right</button>
        <button className="btn btn-secondary mt-3 me-3" type="button" onClick={()=>swipeLeft(game, setGame)}>Swipe Left</button>
        <br></br>
        <button className="btn btn-secondary mt-3 me-3" type="button" onClick={()=>swipeUp(game, setGame)}>Swipe Up</button>
        <button className="btn btn-secondary mt-3 me-3" type="button" onClick={()=>swipeDown(game, setGame)}>Swipe Down</button>
      </div>
    </div>
  )
}

export default Grid