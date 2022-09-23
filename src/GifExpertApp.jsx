import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto', 'Hunter x Hunter'])
 
  const onAddCategory = () => {
    setCategories(['Mi term', ...categories])
    // setCategories( cat => [...cat, 'Term'] ) // 2da forma
  }

  return (
    <>
    {/* Titulo */}
      <h1>Gif Expert APP</h1>
      {/* input */}
      <AddCategory />

      <button  onClick={  onAddCategory } > Agregar</button>
      {/* Listado de Gif */}
      <ol>
         { 
         categories.map(category => {
          return <li key={ category }>{category}</li>
         }) 
         }
      </ol>
        {/* GitItem */}
    </>
  );
};
