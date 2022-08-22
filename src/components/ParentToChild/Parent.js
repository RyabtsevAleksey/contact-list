import "./Parent.css";
import Child from "./Child";
import React from "react";

const Parent = () => {

  // 1.Создаем хук useState
  const [name,setName] = React.useState('');
  // 2. Функция принимает событие и использует setName для записи данных из инпут
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <>
    <div className="parent__main-conteiner">
      <strong><p>1. Parent to Child data transfer</p></strong>
      <p>
        <i>Parent component</i>
      </p>
      <form action="">
        <label htmlFor="">name:</label>
        <br />
        {/* 3.Навешиваем функцию  */}
        <input type="text" name="" id="" placeholder="Enter name" onChange={handleNameChange} />
      </form>
      
      {/* 4.Передаем данные в качестве пропс */}
      <Child name={name}/>
    </div>
    </>
  );
};

export default Parent;
