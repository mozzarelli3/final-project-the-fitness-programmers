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
            <div className="  bg-applegreen flex-col space-y-20 min-h-screen flex items-center justify-center bg-white-500 px-4 sm:px-6 lg:px-8">
                

                <div className="heading">
                    <h1 className="mt-2 text-4xl font-bold text-teal-400">
                        Set a goal
                    </h1>
                </div>
                <div className="bg-offwhite rounded-lg shadow-md px-20 py-10 space-y-4">

                    <div className="block w-full rounded-md space-y-4">
                        <div className="workout-type" >
                            <p className="mt-2 text-2xl text-teal-400 " >Enter your target weight</p>
                            </div>
                            <div>
                            <TextBox className="block w-full px-3 py-2 pl-10 border  placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-teal-400 focus:border-teal-400 focus:z-10 sm:text-sm block" size={20}  placeholder="Enter weight in KG" onValueChange={handleValueChange} />
                            
                        </div>

                        <div className="duration">
                            <p className="mt-2 text-2xl text-teal-400">Target date</p>
                            </div>
                            <div>
                            <DateInput className="block w-full px-3 py-2 pl-10 border  placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-teal-400 focus:border-teal-400 focus:z-10 sm:text-sm block"  onDateChange={handleDateChange} />
                        </div>
                    </div>
                    

                <div className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-teal-300 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400">
                    <button>Submit</button>
                </div>
                </div>

            </div>
        </>
    )
}