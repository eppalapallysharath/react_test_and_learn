import React from 'react'
import { useContext } from 'react'
import { mycontext } from '../App'


// code with useContext 
// const Todos = () => {
//   const data = useContext(mycontext)
//   return (
//     <div>TodosComponent
//       <h1> {data.name} </h1>
//     </div>
//   )
// }



// code without useContext using consumer concept



const Todos = () => {
  return (
    <mycontext.Consumer>
      {(val)=><>
      <button onClick={()=>{
        const {setCounter}= val
        return setCounter((prev)=>prev -2 ) 
      } }>count decrement</button>
      <h1> this todo component {val?.data?.name}</h1></>}
    </mycontext.Consumer>
  );
}


export default Todos