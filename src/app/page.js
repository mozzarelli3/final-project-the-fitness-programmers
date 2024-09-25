"use client";
import { user } from "./data.js";

export default function Page() {
  console.log(user);

  return (
    <div>
      <h1>Progress</h1>
      <div>
        <div>
          <p>Start weight</p>
          <p>{user[0].startWeight}</p>
        </div>
        <div>
          <p>Current weight</p>
          <p>{user[0].currentWeight}</p>
        </div>
        <div>
          <p>Target weight</p>
          <p>{user[0].targetWeight}</p>
        </div>
      </div>
      <div>
        <h1>Chart here</h1>
      </div>
      <h1>Daily</h1>
      <div>
        <p>Target calories</p>
        <p>{user[0].targetCalories}</p>
      </div>
      <div>
        <p>Achieved calories</p>
        <p>{user[0].achievedCalories}</p>
      </div>
      <div>
        <p>Workout time / goal</p>
        <p>1hour</p>
      </div>
      <div>
        <p>Average workout time</p>
        <p>30mins</p>
      </div>
    </div>
  );
}
