import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";

export const GifGrid = ({ category }) => {
  // De esta forma se ejecuta cada vez que se redibuja el componente
  // getGifs(category);

  const [images, setimages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setimages(newImages);
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <ol>
        {images.map(({ id, title, url }) => (
          <li key={id}>{title}</li>
        ))} 
      </ol>
    </>
  );
};
