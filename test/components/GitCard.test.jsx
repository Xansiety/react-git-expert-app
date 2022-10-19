

import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components/GifCard"


describe("Pruebas en <GifCard />", () => {
    const title = "Xansiety";
    const url = "https://github.com/xansiety"; 
    // es recomendable hacer esta prueba hasta que se finalice el desarrollo
    test("Debe hacer match con el snapshot", () => {
      //renderiza el componente en memoria
      const { container } = render(<GifCard title={title} url={url} />);
      expect(container).toMatchSnapshot();
    });

})

    