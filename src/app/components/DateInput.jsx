import React, { useState } from 'react';

function DateInput({ label, onDateChange }) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div>
      <label htmlFor="date-picker">{label}</label>
      <input
        id="date-picker"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      {selectedDate && <p>You selected: {selectedDate}</p>}
    </div>
  );
}

export default DateInput;