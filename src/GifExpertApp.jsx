import { useState } from "react";
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Hunter x Hunter"]);

  const onAddCategory = (newCategory) => {
    // console.log({ newCategory });

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories( cat => [...cat, 'Term'] ) // 2da forma
  };

  return (
    <>
      <h1>Gif Expert APP</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
