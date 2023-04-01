import React from 'react'

const WorkoutCalc = ({ userPreference }) => {

  const questions = [
    { question:"How many exercises would you like to do?", options:[1,2,3,4,5,6,7,8] },
    { question:"What muscle group(s) would you like to focus on?", options:["Glutes only", "Hamstrings", "Quads", "Unilaterals"] },
    { question: "What equipment is available to you?", options: ["Body Weight Only", "Dumbbells", "Barbell", "Bands", "Kettlebells", "Gym Machines"]},
    { question: "Would you like to include burnout sets at the end?", options: [true, false] }
  ]

  const submitHandler = () => {
    e.preventDefault();
  }

  return (
    <div>

    </div>
  )
}

export default WorkoutCalc


// Master list contains all workouts
// Workout for Hypertrophy or Strength or Endurance determines sets/reps
