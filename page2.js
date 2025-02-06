
import { useState } from "react";
import Link from "next/link";

function Navigation() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-link">Home</Link>
      <Link href="/page1" className="nav-link">Page 1</Link>
      <Link href="/page2" className="nav-link">Page 2</Link>
    </nav>
  );
}

export default function Page2() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const correctAnswer = "B";

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="container">
      <Navigation />
      <h1 className="title">Page 2 - Quiz</h1>
      
      <p className="question">What is the capital of Canada?</p>
      <div className="options">
        <button 
          className={`button option ${selectedAnswer === "A" ? "selected" : ""}`} 
          onClick={() => handleAnswerClick("A")}
        >
          A. Toronto
        </button>
        <button 
          className={`button option ${selectedAnswer === "B" ? "selected" : ""}`} 
          onClick={() => handleAnswerClick("B")}
        >
          B. Ottawa
        </button>
        <button 
          className={`button option ${selectedAnswer === "C" ? "selected" : ""}`} 
          onClick={() => handleAnswerClick("C")}
        >
          C. Calgary
        </button>
        <button 
          className={`button option ${selectedAnswer === "D" ? "selected" : ""}`} 
          onClick={() => handleAnswerClick("D")}
        >
          D. Montreal
        </button>
      </div>
      
      {selectedAnswer && (
        <p className={`result ${selectedAnswer === correctAnswer ? "correct" : "wrong"}`}>
          {selectedAnswer === correctAnswer ? "Correct!" : "Wrong!"}
        </p>
      )}
    </div>
  );
}
