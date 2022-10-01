import { useEffect } from "react";
import { getGifs } from "../helpers/getGifts";


export const GifGrid = ({ category }) => {
  // De esta forma se ejecuta cada vez que se redibuja el componente
  // getGifs(category);
 
  useEffect( () => {
    getGifs(category)
  }, [])
  
  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
