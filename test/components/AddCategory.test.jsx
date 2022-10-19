import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe("Pruebas en <AddCategory />", () => {
  
    test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    //    screen.debug()
    //Disparara el evento
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "xansiety" } });
    // screen.debug()
    expect(input.value).toBe("xansiety");
  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Xansiety'
        // TODO: ???
        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole("textbox");
        const form  = screen.getByRole("form");

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe("");
 
    })

});
