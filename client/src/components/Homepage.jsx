import React, { useState } from 'react'

const Homepage = () => {

    const [ userPreference, setUserPreference ] = useState("");

    const options = ["random", "focus", "custom"];

    const workoutHandler = (userPreference) =>{

    }

  return (
    <div>
        <h1>Welcome to The Natural BBL workout generator.</h1>
        <button onClick={()=>workoutHandler(options[0])}>Generate Random Workout</button>
        <button onClick={()=>workoutHandler(options[1])}>Generate Workout by Focus</button>
        <button onClick={()=>workoutHandler(options[2])}>Generate Custom Workouot</button>
    </div>
  )
}

export default Homepage
