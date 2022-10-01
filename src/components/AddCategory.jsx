import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({inputValue});
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
