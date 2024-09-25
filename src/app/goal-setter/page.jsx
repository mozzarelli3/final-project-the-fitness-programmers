'use client'

import React, { useState } from 'react';
import TextBox from '../components/TextBox'
import DateInput from '../components/DateInput';


export default function GoalSetter() {

    const handleValueChange = (value) => {
        console.log('Minutes entered:', value);
      };

    const handleDateChange = (date) => {
        console.log('Date selected:', date);
      };

    return (
        <>
            <div className="wrapper">

                <div className="heading">
                    <h1>Set a Goal</h1>
                </div>

                <div className="input-section">
                    <div className="workout-type">
                        <p>Enter your target weight</p>
                        <TextBox label="Input minutes:" placeholder="Enter minutes" onValueChange={handleValueChange} />
                    </div>

                    <div className="duration">
                        <p>Target date</p>
                        <DateInput label="Choose a date:" onDateChange={handleDateChange} />
                    </div>
                </div>

                <div className="submit-btn">
                    <button>Submit</button>
                </div>

            </div>
        </>
    )
}