
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

 jest.mock('../../src/hooks/useFetchGifs')

describe("Pruebas en <GifGrid />", () => {

    const category = 'Xansiety'

     test('Debe de mostrar el loading inicialmente', () => { 

        // Hook MOQ
        useFetchGifs.mockReturnValue({
            images: [], isLoading: true
        })


        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
      })

      test('Debe de mostrar items cuando se cargan las imágenes  useFetchGifs', () => { 

        const gifts = [{
            id: 'ABC',
            title: 'Xansiety',
            url: 'https://xansiety.github.io'
        },
        {
            id: 'DEF',
            title: 'Naruto',
            url: 'https://naruto.github.io'
        }]

        // Hook MOQ
        useFetchGifs.mockReturnValue({
            images: gifts, isLoading: false
        })
 
        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2)
        
       })
  });
  
