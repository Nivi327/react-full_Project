import { useState } from "react";
import Output from "./Output";

const Greetings = (props) => {
  const [textChanged, setTextChanged] = useState(false);

  const buttonOnClick = () => {
    setTextChanged(true);
  };
  return (
    <div>
      <h1>Hello World!</h1>
      {textChanged && <Output>Changed!</Output>}
      {!textChanged && <Output>Tag Yourelves in this Greetings</Output>}
      <button onClick={buttonOnClick}></button>
    </div>
  );
};

export default Greetings;
