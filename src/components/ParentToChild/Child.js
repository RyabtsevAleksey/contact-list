import './Child.css'

import React from 'react'

// 5.Принимаем пропс и вставляем в разметку
const Child = ({name}) => {
  return (
    <div className='child__main-conteiner'>
      <p>
        <i>Child Component</i>
      </p>
      <span>Name is: <strong>{name}</strong> </span>
    </div>
  )
}

export default Child
