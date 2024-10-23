import pokemon from './data.js';

const game = {
	party: [],
	gyms: [
		{ location: 'Pewter City', completed: false, difficulty: 1 },
		{ location: 'Cerulean City', completed: false, difficulty: 2 },
		{ location: 'Vermilion City', completed: false, difficulty: 3 },
		{ location: 'Celadon City', completed: false, difficulty: 4 },
		{ location: 'Fuchsia City', completed: false, difficulty: 5 },
		{ location: 'Saffron City', completed: false, difficulty: 6 },
		{ location: 'Cinnabar Island', completed: false, difficulty: 7 },
		{ location: 'Viridian City', completed: false, difficulty: 8 },
	],
	items: [
		{ name: 'potion', quantity: 4 },
		{ name: 'pokeball', quantity: 8 },
		{ name: 'rare candy', quantity: 99 },
	],
};

//  Exercise 1
// console.dir(pokemon, { maxArrayLength: null });

//  easy
console.log(pokemon[59]);

//  Medium - Answer given by Emre
const getPokemon = (pokemon) => pokemon.number === 59;
const pokemonToFind = pokemon.findIndex(getPokemon);
console.log(pokemon[pokemonToFind].name);

//  Exercise 2
//  Add the following console.log:
console.log(game);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = 'Hard';

console.log(game);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

const starterP = pokemon.find((entry) => entry.starter === true);

if (starterP) {
	game.party.push(starterP);
} else {
	console.log('Error');
}
console.log(game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

let starterPokemon = pokemon.find((entry) => entry.starter === true);

if (starterPokemon) {
	game.party.push(starterPokemon);
}
let selectedTypes = ['Fire', 'Water', 'Grass'];
let minHP = 50;

let additionalPokemon = pokemon.filter(
	(entry) => selectedTypes.includes(entry.type) && entry.hp >= minHP
);

let chosenPokemon = additionalPokemon.slice(0, 3);

if (chosenPokemon.length > 0) {
	game.party.push(...chosenPokemon);
} else {
	console.error('No additional Pokémon found based on the criteria.');
}

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

game.gyms.forEach((gym) => {
	if (gym.difficulty <= 3) {
		gym.completed = true;
	}
});
console.log(game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

if (game.party && game.party.length > 0) {
	let starterNum = game.party[0].number;
	let evolveNum = starterNum + 1;
	let evolvePokemon = undefined;

	pokemon.forEach((entry) => {
		if (entry.number === evolveNum) evolvePokemon = entry;
	});

	//  Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
	//  splice() method
	if (evolvePokemon) {
		game.party.splice(0, 1, evolvePokemon);
	} else {
		console.error('No evolved Pokémon found for number:', evolveNum);
	}
} else {
	console.error('Game party is empty or undefined.');
}

console.log(game.party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
game.party.forEach((pokemon) => {
	console.log(pokemon.name);
});
for (let i = 0; i < game.party.length; i++) {
	console.log(game.party[i].name);
}

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
//?   Ref by:  Alex

//? step 1: i need to loop or do foreach in my pokemon array which nis inside data.js
//? step 2 i want to have a condition that checks if starter value === to true
////?STEP 3 i want to retunr all thoes pokemons

let starters = []; // Initialize the array outside the loop

pokemon.forEach((p) => {
	if (p.starter === true) {
		starters.push(p); // Add the starter Pokémon to the array
	}
});

// Log the names of all starter Pokémon
console.log('These are the starter Pokémon from the array:');
starters.forEach((starter) => {
	console.log(starter.name);
});

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function (pokemonObj) {
	game.party.push(pokemonObj);
};
let selectedPokemon = pokemon[0];
game.catchPokemon(selectedPokemon);

console.log(game.party);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function (pokemonObj) {
	game.party.push(pokemonObj);

	let pokeballItem = this.items.find((item) => item.name === 'Pokeball');
	if (pokeballItem) {
		pokeballItem.quantity--;
	}
};
let pickedPokemon = pokemon[1];
game.catchPokemon(pickedPokemon);

console.log(game.party);
console.log(game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
game.gyms.forEach((gym) => {
	if (gym.difficulty <= 6) {
		gym.completed = true;
	}
});
console.log(game.gyms);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

//====================
//  Ref: ChatGPT

game.gymStatus = function () {
	const gymTally = {
		completed: 0,
		incomplete: 0,
	};

	// Log the gyms array to check its structure
	console.log('Gyms Array:', this.gyms);

	// Iterate through the gyms array and update the tally
	this.gyms.forEach((gym) => {
		if (gym) {
			if (gym.complete === true) {
				gymTally.completed++;
			} else {
				gymTally.incomplete++;
			}
		}
	});

	// Log the final tally
	console.log(gymTally);
};

// Call the gymStatus method to see the tally
game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
// game.partyCount = () => game.party.length;
// console.log(pokemon);

// Define the partyCount method
game.partyCount = function () {
	return this.party.length;
};
const count = game.partyCount();
console.log(`Number of Pokémon in party: ${count.partyCount}`);

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms.forEach((gym) => {
	if (gym.difficulty <= 8) {
		gym.completed = true;
	}
});
console.log(game.gyms);

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

game.gymStatus();
console.log(game);

// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// console.log(JSON.stringify(game, null, 2));
