import React, { useState } from 'react';

function DateInput({ label, onDateChange }) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div className="flex flex-col items-start space-y-2">
      <label htmlFor="date-picker" className="text-sm font-medium text-gray-700">{label}</label>
      <input
        id="date-picker"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="w-full p-2 bg-white border border-gray-300 rounded-full text-gray-700 cursor-pointer focus:outline-none focus:outline-none focus:ring-teal-400 focus:border-teal-400 hover:bg-gray-100 transition duration-300"
      />
    </div>
  );
}

export default DateInput;