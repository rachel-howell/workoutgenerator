import { createContext, useState } from 'react'

export const WorkoutContext = createContext();

export const WorkoutProvider = (props) => {

const [ userPreference, setUserPreference ] = useState('');

  return (
    <WorkoutContext.Provider value={{
            userPreference,
            setUserPreference
        }}>
            {props.children}
    </WorkoutContext.Provider>
  )
}
