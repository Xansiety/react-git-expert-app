import { getGifs } from "../helpers/getGifts";

export const GifGrid = ({ category }) => {
  
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
