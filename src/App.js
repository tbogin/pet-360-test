import React, { useState } from 'react';
import './App.css';
import catImg from './cat.jpg';
import dogImg from './dog.jpg';

const App = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div className="App">
      <div>Dog or Cat?</div>
      <form className="pet-form">
        <input 
          type="radio" 
          name="option-btn" 
          value="cat" 
          checked={selectedOption === 'cat'}
          onChange={handleChange}/>
        <label>Cat</label><br />
        <input 
          type="radio" 
          name="option-btn" 
          value="dog" 
          checked={selectedOption === 'dog'}
          onChange={handleChange}/>
        <label>Dog</label><br/>
      </form>

      <div className="results-container">
        { selectedOption === 'cat' &&
            <img className="cat" src={catImg} />
        }
        { selectedOption === 'dog' &&
            <img className="dog" src={dogImg} />
        }
      </div>
    </div>
  );
}

export default App;
