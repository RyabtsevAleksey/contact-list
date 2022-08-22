import React from "react";
import './Sibling1.css'

const Sibling1 = ( {onChange} ) => {

  const handleNameChange = (event) => {
    onChange(event.target.value)
  }


  return (
    <div className="sibling1__main-conteiner">
      <p>
        <i>Sibling 1</i>
      </p>

      <form>
        <label>name:</label>
        <br />
        <input
          type="text"
          placeholder="Enter name"
          onChange={handleNameChange}
        />
      </form>
    </div>
  );
};

export default Sibling1;
