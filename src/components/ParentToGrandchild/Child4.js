import './Child4.css'
import React from 'react'
import Grandchild4 from './Grandchild4'



const Child4 = ( {name} ) => {
  return (
    <div className='Child4__main-conteiner'>
      <p><i>Child Component</i></p>
      
      <Grandchild4 name={name} /> 
    </div>
  )
}

export default Child4
