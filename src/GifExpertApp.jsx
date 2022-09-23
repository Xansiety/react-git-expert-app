import { useState } from "react";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto', 'Hunter x Hunter'])
 

  return (
    <>
    {/* Titulo */}
      <h1>Gif Expert APP</h1>
      {/* input */}
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
