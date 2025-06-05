import { useState } from "react";
import Button from "./Button";

const Border = () => {

    const [tapFlag, setTapFlag] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    console.log(squares);


    const changeClick = (i)=> {
        
        console.log(i);
        if (squares[i] || winnersMatch(squares)) {
            return;
        }
         const nextSquares = squares.slice();

        if(tapFlag){
            nextSquares[i] = 'X';
        }else{
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setTapFlag(!tapFlag);
    }

    const winnersMatch = (squares) => {
        const matches = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < matches.length; i++) {
        const [a, b, c] = matches[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
  }
        return(
            null
        );
    }

    const winner = winnersMatch(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (tapFlag ? "X" : "O");
    }

    return(
        <div className="table"> 
             <h1 className="text-5xl font-bold mb-8">TIC-TAC-TOE GAME</h1>
             <h2 className="text-3xl font-bold mb-8">{status}</h2>
            <div className="table-row-group flex ms-8">
                <div className="table-row flex clear-both content-none">
                    <Button text={squares[0]} onPress={() => changeClick(0)} />
                    <Button text={squares[1]} onPress={() => changeClick(1)} />
                    <Button text={squares[2]} onPress={() => changeClick(2)} />
                </div>
                <div className="table-row clear-both content-none">
                    <Button text={squares[3]} onPress={ () => changeClick(3)} />
                    <Button text={squares[4]} onPress={ () => changeClick(4)} />
                    <Button  text={squares[5]} onPress={() => changeClick(5)}/>
                </div>
                <div className="table-row clear-both content-none">
                    <Button text={squares[6]} onPress={ () => changeClick(6)} />
                    <Button text={squares[7]} onPress={() => changeClick(7)} />
                    <Button text={squares[8]} onPress={() =>changeClick(8)} />
                </div>

            </div>

        </div>
    );
}

export default Border;