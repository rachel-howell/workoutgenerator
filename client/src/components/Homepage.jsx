import React, { useState, useContext } from 'react'
import { WorkoutContext } from './WorkoutContext';
import { useNavigate, useeNavigate } from 'react-router-dom'

const Homepage = () => {


    const { setUserPreference } = useContext(WorkoutContext)

    const nav = useNavigate();

    const options = ["random", "focus", "custom"];

    const workoutHandler = (option) =>{
        setUserPreference(option);
        if(option == options[1] || option == options[2]) {
            nav('/quiz')
            
        } else {
           nav('/workout')
        }
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
