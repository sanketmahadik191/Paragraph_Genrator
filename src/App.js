import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [paragraphs, setParagraphs] = useState([]);

  const generateParagraphs = () => {
    const amountInput = document.getElementById('amount').value;
    const amount = parseInt(amountInput);

    if (!isNaN(amount) && amount > 0 && amount <= data.paragraphs.length) {
      const generatedParagraphs = data.paragraphs.slice(0, amount);
      setParagraphs(generatedParagraphs);
    } else {
      alert('Please enter a valid number between 1 and ' + data.paragraphs.length);
    }
  };


  return (
    <div className="App">
     <h1>TIRED OF BORING LOREM IPSUM?</h1>
     <div className='input-para'>
      <span>Paragraphs: </span>
      <input type="number" name="amount" id="amount"></input>
      <button type="button" class="btn btn-warning" onClick={generateParagraphs}>Generate</button>
     </div>
     <div className='paragraphs'>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
