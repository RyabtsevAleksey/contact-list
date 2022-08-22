import './grandchild4.css'


import React from 'react'

const Grandchild4 = ( {name} ) => {
  return (
    <div className='grandchild4'>
      <p><i>Grandchild component</i></p>
      <span>Name is: <strong>{name}</strong></span>
    </div>
  )
}

export default Grandchild4
