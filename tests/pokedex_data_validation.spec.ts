import {test,expect} from 'playwright/test';


const source = 'https://pokeapi.co/api/v2/pokemon/'


test('Pokedex Validation API - starter Pokemon - Kanto', async ({request}) =>{
   //
 const bulbasaur_data = await request.get(source+'bulbasaur');
 
 expect(bulbasaur_data.status()).toBe(200);

 const bulbasaur_dataJSON = await bulbasaur_data.json();


 console.log (bulbasaur_dataJSON)

 console.log('Pokemon moves')
 console.log (bulbasaur_dataJSON.moves);
// validate that it can learn tackle

 expect (bulbasaur_dataJSON.moves[0]).toHaveProperty('move.name','razor-wind');
  console.log (bulbasaur_dataJSON.moves[0]);


  const charmander_data = await request.get(source+'charmander');
 
 expect(charmander_data.status()).toBe(200);

 const charmander_dataJSON = await charmander_data.json();


 console.log (charmander_dataJSON)

 console.log('Pokemon moves')
 console.log (charmander_dataJSON.moves);
// validate that it can learn tackle

 expect (charmander_dataJSON.moves[0],"move listed under pokemon").toHaveProperty('move.name','tackle');
  console.log (charmander_dataJSON.moves[0]);



});