import React, { createContext } from 'react'
import { WorkoutContext } from './WorkoutContext'

const WorkoutCalc = () => {

  const { userPreference } = createContext(WorkoutContext);

  const questions = [
    { question: "How many exercises would you like to do?", options: [1,2,3,4,5,6,7,8] },
    { question: "What muscle group(s) would you like to focus on?", options: ["Glutes only", "Hamstrings", "Quads", "Unilaterals"] },
    { question: "What equipment is available to you?", options: ["Body Weight Only", "Dumbbells", "Barbell", "Bands", "Kettlebells", "Gym Machines"]},
    { question: "Would you like to include an additional burnout exercise at the end?", options: ["Yes", "No"] }
  ]

  const submitHandler = () => {
  }

  return (
    <div>
      {
        questions.map((q)=>(
          <div>
            <h1>{q.question}</h1>
            <p>{q.options.map((opt)=>{
              <h1>hi{ opt}</h1>
            })}</p>
            {/* make the map work */}
          </div>
        ))
      }
    </div>
  )
}

export default WorkoutCalc


// Master list contains all workouts
// Workout for Hypertrophy or Strength or Endurance determines sets/reps
