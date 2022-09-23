import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hunter x Hunter");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log({inputValue});
  };
  return (
    <form onSubmit={ (event) => handleSubmit(event)}>
      {inputValue}

      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
