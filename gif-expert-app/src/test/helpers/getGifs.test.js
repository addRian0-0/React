import { getGifs } from "../../helpers/getGifs";

describe('prueba de getGifs con fetch', () => {

    test('debe traer 5 elementos', async () => {
      
        const gifs = await getGifs('Arcane');
        expect(gifs.length).toBe(5);
        
    })

})