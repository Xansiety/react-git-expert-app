 
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en Hook useFetchGifs", () => {

  test("Debe de retornar el estado inicial", async () => {
    const {  result } = renderHook(() => useFetchGifs('xansiety'))
    const {images, isLoading } = result.current
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  });
 

  test("Debe de retornar un arreglo de imagenes y isLoading en false", async () => {
    const {  result } = renderHook(() => useFetchGifs('naruto')) 
    //esperar a que el hook haga su trabajo
    // ESPERA!! a que la condicion se cumpla
    await waitFor(
        () => expect( result.current.images.length ).toBeGreaterThan(0)
    ) 
    const {images, isLoading } = result.current
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy() 
  });
 
});