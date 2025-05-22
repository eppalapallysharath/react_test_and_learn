import Dashboard from "./components/Dashboard"
import Todos from "./components/Todos"
import { createContext, useState } from "react"

const data = {name: "sharath", age: 20}

export const mycontext = createContext(data)

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
    <div>
      <h5>{counter}</h5>
    </div>
    <mycontext.Provider value={{ data, setCounter}}>
    <Dashboard/>
    <Todos/>
    </mycontext.Provider>
    </>
  )
}

export default App
