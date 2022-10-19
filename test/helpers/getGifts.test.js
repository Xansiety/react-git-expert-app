import { getGifs } from "../../src/helpers/getGifts";

describe("Pruebas en getGifts()", () => {
  test("Debe de retornar un arreglo de Gifts", async () => {
    const gifts = await getGifs("naruto");

    expect(gifts.length).toBeGreaterThan(0);
    expect(gifts[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
