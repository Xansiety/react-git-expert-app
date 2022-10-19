import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components/GifCard";

describe("Pruebas en <GifCard />", () => {
  const title = "Xansiety";
  const url = "https://github.com/xansiety";
  // es recomendable hacer esta prueba hasta que se finalice el desarrollo
  test("Debe hacer match con el snapshot", () => {
    //renderiza el componente en memoria
    const { container } = render(<GifCard title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifCard title={title} url={url} />);
    //  screen.debug() // para mostrar el componente
    // expect( screen.getByRole('img').src).toBe(url) 
    const {src, alt} = screen.getByRole("img");
    expect(src).toBe(url)
    expect(alt).toBe(alt) 
  });

  test('Debe de mostrar el titulo en el componente', () => { 
    render(<GifCard title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy()
   })
  
});
