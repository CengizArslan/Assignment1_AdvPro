import { useState } from "react";
import Link from "next/link";

export default function Page1() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <nav className="nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/page1" className="nav-link">Page 1</Link>
        <Link href="/page2" className="nav-link">Page 2</Link>
      </nav>
      
      <h1 className="title">Page 1 - Input Handling</h1>
      <input 
        type="text" 
        className="input" 
        placeholder="Type something..." 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <p className="message">You typed: {inputValue}</p>
    </div>
  );
}