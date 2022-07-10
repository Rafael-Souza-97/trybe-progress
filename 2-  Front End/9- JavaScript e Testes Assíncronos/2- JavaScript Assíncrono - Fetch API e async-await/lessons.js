function append(pokemon) {
  const section = document.querySelector("section");

  const divCard = document.createElement("div");
  const img = document.createElement("img");
  const divBody = document.createElement("div");
  const cardTitle = document.createElement("h5");

  divCard.classList.add("card");
  divBody.classList.add("card-body");
  cardTitle.classList.add("card-title");
  img.classList.add("card-img-top");

  img.src = pokemon.imageUrl;
  cardTitle.innerHTML = pokemon.name;

  divBody.appendChild(cardTitle);
  divCard.appendChild(img);
  divCard.appendChild(divBody);
  section.appendChild(divCard);
}

function fetchPokemon() {
  const URL = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const result = fetch(URL);

  result
    .then((response) => response.json())
    .then((data) => {
      const pokemon = {
        name: data.name,
        imageUrl: data.sprites.front_default,
      };
      append(pokemon);
    })
    .catch((error) => console.log("Deu erro na api , Tururu", error));
}

async function fetchPokemonAsync(pokemonName) {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const result = await fetch(URL);
    const data = await result.json();
    console.log("API terminou");
    const pokemon = {
      name: data.name,
      imageUrl: data.sprites.front_default,
    };
    append(pokemon);
  } catch (error) {
    console.log("Deu erro na api , Tururu", error);
  }
}

function requestPokemonsAsync() {
  fetchPokemonAsync("pikachu");
  fetchPokemonAsync("mew");
  fetchPokemonAsync("mewtwo");
  fetchPokemonAsync("charmander");
  console.log("Vivemos num mundo pokemon Async");
}

async function requestPokemons() {
  await fetchPokemonAsync("pikachu");
  await fetchPokemonAsync("mew");
  await fetchPokemonAsync("mewtwo");
  await fetchPokemonAsync("charmander");
  console.log("Vivemos num mundo pokemon Sync");
}

window.onload = () => {
  requestPokemons();
};