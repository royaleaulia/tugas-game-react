import React, { useState } from "react";
import './App.css';


function App() {


  const [Result, setShowResults] = useState(false);
  const [score, Score] = useState(0);
  const [Pertanyaan, setPertanyaan] = useState(0);

  const pertanyaan = [
    {
      text: "What is the capital of America?",
      pilgan: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      pilgan: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      pilgan: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      pilgan: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      pilgan: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  const Klicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      Score(score + 1);
    }

    if (Pertanyaan + 1 < pertanyaan.length) {
      setPertanyaan(Pertanyaan+ 1);
    } else {
      setShowResults(true);
    }
  };


    /* Resets the game back to default */
    const restartGame = () => {
      Score(0);
      setPertanyaan(0);
      setShowResults(false);
    };

    
  return (
    <div className="App">
      {/* 1 Header */}
      <h1>Quiz Anak Anak</h1>

      {Result ? (
        /* 3. Hasil Akhir */ 
        < div className="final-results">
          <h1>Final Result</h1>
          <h2>Anda Benar {score} dari {pertanyaan.length} Pertanyaan</h2>
          <h2>Score anda ({(score / pertanyaan.length) * 100}%)</h2>
          <button onClick={() => restartGame()}>Ulangi Permainan</button>
        </div>
      )  : (


        /* 2. Daftar Pertanyaan */ 
        <div className="question-card">
          <h2>Terdiri Dari {Pertanyaan + 1}/{pertanyaan.length} Pertanyaan</h2>
          <h3 className="question-text">{pertanyaan[Pertanyaan].text}</h3>

          <ul>
            {pertanyaan[Pertanyaan].pilgan.map((pilihan) => {
              return (
                <li
                  key={pilihan.id}
                  onClick={() => Klicked(pilihan.isCorrect)}
                >
                  {pilihan.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
