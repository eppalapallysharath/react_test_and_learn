import React from 'react'
import { useContext } from 'react'
import { mycontext } from '../App'

const Todos = () => {
  const data = useContext(mycontext)
  return (
    <div>TodosComponent
      <h1> {data.name} </h1>
    </div>
  )
}

export default Todos