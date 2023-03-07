import React, { useEffect } from 'react'
import { useState } from 'react';

const Game = () => {
    const [array, setArray] = useState(['', '', '', '', '', '', '', '', '']);
    //true means x player and false means y player
    const [player, setPlayer] = useState(true);
    const [winner,setWinner]=useState(false);
    const [numberOfTurn,setNumberOfTurn]=useState(0);
    const [tie,setTie]=useState(false);
    function clickOnBlock(index) {
        //firstly check player is valid for playing
        if (array[index] === '' && numberOfTurn<9 && winner===false) {
            if (player) {
                array[index] = 'X';
                setArray(array);
            } else {
                array[index] = 'O'
                setArray(array);
            }
            setPlayer(!player);
            setNumberOfTurn(numberOfTurn+1);
            console.log(array);
        }
        console.log("numberOf Turn : "+numberOfTurn);
        
        if(playerIsWin()){
            setWinner(true);
            setNumberOfTurn(9);
            return;
        }
        if(numberOfTurn===8){
            setTie(true);
            setNumberOfTurn(9);
            return;
        }
    }
    const playerIsWin=()=>{
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (array[a] && array[a] === array[b] && array[a] === array[c]) {
              return array[a];
            }
          }
          return null;
    }

    const restartTheGame=()=>{
        setArray(['', '', '', '', '', '', '', '', '']);
        setPlayer(true);
        setWinner(false);
        setNumberOfTurn(0);
        setTie(false);
    }

    return (
        <div className='wrapper'>

            <div class="content-wrapper">
                <p className='title'>#O TIC TOC TOE O#</p>
                <div className='game-board'>
                    <div className='row'>
                        <button className='block' onClick={() => { clickOnBlock(0) }} > {array[0]} </button>
                        <button className='block' onClick={() => { clickOnBlock(1) }} > {array[1]} </button>
                        <button className='block' onClick={() => { clickOnBlock(2) }} > {array[2]} </button>

                    </div>

                    <div className='row'>
                        <button className='block' onClick={() => { clickOnBlock(3) }} > {array[3]} </button>
                        <button className='block' onClick={() => { clickOnBlock(4) }} > {array[4]} </button>
                        <button className='block' onClick={() => { clickOnBlock(5) }} > {array[5]} </button>
                    </div>

                    <div className='row'>
                        <button className='block' onClick={() => { clickOnBlock(6) }} > {array[6]} </button>
                        <button className='block' onClick={() => { clickOnBlock(7) }} > {array[7]} </button>
                        <button className='block' onClick={() => { clickOnBlock(8) }} > {array[8]} </button>
                    </div>
                </div>
                <div className='action-panel'>
                    { winner  && <p className="msg">{!player ? "X player is winner." : "O player is winner."} </p> }
                    { tie && <p className="msg">Game Is Draw....</p>}
                    <button className='btn' onClick={restartTheGame}>Restart game !!</button>
                </div>
            </div>

        </div>
    )
}

export default Game
