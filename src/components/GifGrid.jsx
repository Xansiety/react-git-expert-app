import { GifCard } from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // De esta forma se ejecuta cada vez que se redibuja el componente
  // getGifs(category);

  const { images, isLoading } = useFetchGifs(category)
 
  // console.log({images, isLoading})

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
