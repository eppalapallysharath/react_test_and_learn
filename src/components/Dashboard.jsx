import React from 'react'
import { useContext } from 'react'
import { mycontext } from '../App'

const Dashboard = () => {
    const context = useContext(mycontext)
    const {setCounter} = context
  return (
    <div>Dashboard
        <button onClick={()=>setCounter((prev)=> prev + 1)}> count increment</button>
        <h1>{context.age}</h1>
    </div>
  )
}

export default Dashboard