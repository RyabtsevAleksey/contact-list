import './Parent2.css'



import React from 'react'
import Child2 from './Child2'

const Parent2 = () => {

  // 5.Создаем переменную состояния
  const [name,setName] = React.useState('')

  const handleNameChange = (name) => {
    setName(name)
  }


  return (
    <>
    <div className="parent2__main-conteiner">
      <strong><p>2. Child to Parent data transfer</p></strong>
      <p>
        <i>Parent component</i>
      </p>
      <p>Name is: <strong>{name}</strong></p>

    {/* 4.Принимаем функцию в качестве пропс */}
    <Child2 onChange={handleNameChange} />
    </div>
    </>
  )
}

export default Parent2
