import {test,expect} from 'playwright/test';


const source = 'https://pokeapi.co/api/v2/pokemon/'


test('Pokedex Validation API', async ({request}) =>{
   //
 const pokemon_data = await request.get(source+'arbok');
 
 expect(pokemon_data.status()).toBe(200);

 const body = await pokemon_data.json();
  console.log(body);   

 expect (body).toHaveProperty('abilities.ability','overgrow');
});