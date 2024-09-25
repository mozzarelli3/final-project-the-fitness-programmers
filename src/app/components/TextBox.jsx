import React, { useState } from 'react';

function TextBox({ label, placeholder, onValueChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onValueChange(value);
  };

  return (
    <div>
      <label htmlFor="textbox">{label}</label>
      <input
        id="textbox"
        type="number"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue && <p>You entered: {inputValue}</p>}
    </div>
  );
}

export default TextBox;