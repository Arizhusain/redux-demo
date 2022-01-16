import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const newState = useSelector(state => state)
    const {fullName, age, skill} = newState
    console.log("new state",newState)
    return (
        <div>
            <h1>Name: {fullName}</h1>
            <h1>Age: {age}</h1>
            <h1>Skill: {skill}</h1>
        </div>
    )
}

export default Profile
