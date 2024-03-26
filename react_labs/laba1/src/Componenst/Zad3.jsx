import React from 'react';
import '../styles/Chessboard.css';

function Chessboard() {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"]; 
    const evenRow = numbers.map((num, i) => (
        <td key={i} style={{ background: (i++) % 2 === 0 ? "white" : "black" }} className="boba"></td>)); 
    const oddRow = numbers.map((num, i) => (
        <td key={i} style={{ background: (i++) % 2 === 0 ? "black" : "white" }}></td>)); 

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

    return (
        <div className="boba">
            <>
                <thead>
                    <tr>
                        <th></th> 
                        {letters.map((letter, i) => (
                            <th key={i}>{letter}</th>
                        ))}
                        
                    </tr>
                </thead>
                <tbody>
                    {numbers.reverse().map((num, i) => (
                        <tr key={i}>
                            <td>{num}</td>
                            {(i++) % 2 === 0 ? evenRow : oddRow}
                            <td>{num}</td>
                        </tr>
                    ))}
                </tbody>
                <thead>
                    <tr>
                    <th></th> 
                        {letters.map((letter, i) => (
                            <th key={i}>{letter}</th>
                        ))}
                        
                        
                    </tr>
                </thead>
            </>
        </div>
    );
}

export default Chessboard;
