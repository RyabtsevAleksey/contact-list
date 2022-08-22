
import './Sibling2.css'

const Sibling2 = ( {name} ) => {
  return (
    <div className="sibling2__main-conteiner">
      <p>
        <i>Sibling 2</i>
      </p>

      <span>Name is: <strong>{name}</strong></span>
    </div>
  );
};

export default Sibling2;
