import Sibling1 from "./Sibling1.js";
import Sibling2 from "./Sibling2.js";
import './Parent3.css'

import React from "react";

const Parent3 = () => {

  const [name,setName] = React.useState('')

  const handleNameChange = (name) => {
    setName(name)
  }

  return (
    <div className="parent3__main-conteiner">
      <strong>
        <p>3. Sibling to sibling data transfer</p>
      </strong>
      <p>
        <i>Parent component</i>
      </p>

      <Sibling1 onChange={handleNameChange} />
      <Sibling2 name={name} />
    </div>
  );
};

export default Parent3;
