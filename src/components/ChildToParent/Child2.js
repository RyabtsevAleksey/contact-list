import React from "react";
import "./Child2.css";

// 1. Компонент примает callback {onChange}
const Child2 = ({ onChange }) => {

  // 3.создаем функцию обработчик события
  const handleNameChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="child2__main-conteiner">
      <p>
        <i>Child component</i>
      </p>
      <form action="">
        <label htmlFor="">name:</label>
        <br />
        <input
          type="text"
          placeholder="Enter name"
          // 2. Навешиваем функцию на инпут
          onChange={handleNameChange}
        />
      </form>
    </div>
  );
};

export default Child2;
