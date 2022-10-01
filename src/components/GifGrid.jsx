import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";
import { GifCard } from "./GifCard";

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

      <div className="card-grid">
        {images.map((image) => (
          <GifCard
            key={image.id}
            {...image}
            //   title={image.title}
            //   url={image.url}
          />
        ))}
      </div>
    </>
  );
};
