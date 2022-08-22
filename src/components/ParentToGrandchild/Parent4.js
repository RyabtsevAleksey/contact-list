import React from "react";
import './Parent4.css'
import Child4 from "./Child4.js";

const Parent4 = () => {

  const [name,setName] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value)
  }


  return (
    <div className="parent4__main-conteiner">
      <strong>
        <p>4. Parent to Grandchild data transfer</p>
      </strong>
      <p>
        <i>Parent component</i>
      </p>
      <form action="">
        <label htmlFor="">name:</label>
        <br />
        <input
          type="text"
          placeholder="Enter name"
          // 1.инпут получает функцию по событию
          onChange={handleChange}
        />
      </form>

      <Child4 name={name} />
    </div>
  );
};

export default Parent4;
