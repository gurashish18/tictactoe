import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [playerWin, setPlayerWin] = useState(null);

  const [gameMatrix, setGameMatrix] = useState([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]);

  const sqaure1Ref = useRef(null);
  const sqaure2Ref = useRef(null);
  const sqaure3Ref = useRef(null);
  const sqaure4Ref = useRef(null);
  const sqaure5Ref = useRef(null);
  const sqaure6Ref = useRef(null);
  const sqaure7Ref = useRef(null);
  const sqaure8Ref = useRef(null);
  const sqaure9Ref = useRef(null);

  const checkWin = (i, j) => {
    let symbol = gameMatrix[i][j];

    if (gameMatrix[i].every(element => element === symbol)) {
      setPlayerWin(symbol == 1 ? "Player1 Win" : "Player2 Win");
      return;
    }

    if (gameMatrix.every(row => row[j] === symbol)) {
      setPlayerWin(symbol == 1 ? "Player1 Win" : "Player2 Win");
      return;
    }

    if (i === j && gameMatrix.every((row, index) => row[index] === symbol)) {
      setPlayerWin(symbol == 1 ? "Player1 Win" : "Player2 Win");
      return;
    }

    if (i + j === 2 && gameMatrix.every((row, index) => row[2 - index] === symbol)) {
      setPlayerWin(symbol == 1 ? "Player1 Win" : "Player2 Win");
      return;
    }
    return;
  }


  const handleMove = (e, ref) => {
    if (playerWin == null) {
      let newmatrix = gameMatrix;
      let id = Number(e.target.id);
      id--;
      let i = Math.floor(id / 3);
      let j = id % 3;
      if (ref.current.childNodes.length == 0) {
        const p1 = document.createElement('span');
        p1.textContent = 'X';

        const p2 = document.createElement('span');
        p2.textContent = 'O';
        if (player1Turn) {
          ref.current.appendChild(p1);
          newmatrix[i][j] = 1;
          setGameMatrix(newmatrix);
        } else {
          ref.current.appendChild(p2);
          newmatrix[i][j] = 0;
          setGameMatrix(newmatrix);
        }
        checkWin(i, j);
        setPlayer1Turn(!player1Turn);
      }
    }
  }
  return (
    <div className='container'>
      <h1>Its {player1Turn ? "player 1" : "player 2"} turn</h1>
      <div className='row'>
        <div id='1' className='sqaure' onClick={(e) => handleMove(e, sqaure1Ref)} ref={sqaure1Ref}>

        </div>
        <div id='2' className='sqaure' onClick={(e) => handleMove(e, sqaure2Ref)} ref={sqaure2Ref}>

        </div>
        <div id='3' className='sqaure' onClick={(e) => handleMove(e, sqaure3Ref)} ref={sqaure3Ref}>

        </div>
      </div>
      <div className='row'>
        <div id='4' className='sqaure' onClick={(e) => handleMove(e, sqaure4Ref)} ref={sqaure4Ref}>

        </div>
        <div id='5' className='sqaure' onClick={(e) => handleMove(e, sqaure5Ref)} ref={sqaure5Ref}>

        </div>
        <div id='6' className='sqaure' onClick={(e) => handleMove(e, sqaure6Ref)} ref={sqaure6Ref}>

        </div>
      </div>
      <div className='row'>
        <div id='7' className='sqaure' onClick={(e) => handleMove(e, sqaure7Ref)} ref={sqaure7Ref}>

        </div>
        <div id='8' className='sqaure' onClick={(e) => handleMove(e, sqaure8Ref)} ref={sqaure8Ref}>

        </div>
        <div id='9' className='sqaure' onClick={(e) => handleMove(e, sqaure9Ref)} ref={sqaure9Ref}>

        </div>
      </div>
      <h4>{playerWin}</h4>
    </div>
  );
}

export default App;
