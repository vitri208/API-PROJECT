fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => {
    if (!response.ok){
      throw new Error("Could not fetch data");
    }
    return response.json()
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));

// fetchData();

async function fetchData() {
  
  try{

    const pokemon = document.getElementById("pokemon-name").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!response.ok) {
      throw new Error("Could not fetch data");
    }

    const data = await response.json()
    const pokemonSprite = data.sprites.front_default;
    const img = document.getElementById("pokemon-sprite");

    img.src = pokemonSprite;
    img.style.display = "block";
    
    const nama = document.getElementById("pokemon-name-text").innerHTML = data.name;
    const id = document.getElementById("pokemon-id").innerHTML = data.id;
    const weight = document.getElementById("pokemon-weight").innerHTML = data.weight;
  } 
  catch(error){
    console.error(error)
  }
}