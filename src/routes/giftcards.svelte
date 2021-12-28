<script>
  import { onMount} from 'svelte';
  console.log('lets GO');
  const accessToken = 'Bearer ACCESS_TOKEN';
  let results = [];
  onMount(() => {
    getPokemons(9);
  });
  const getPokemons = async (num) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data, index) => {
		const id = index + 1;
		return {
			name: data.name,
			id,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
		};
	});
    results = loadedPokemon;
    console.log({results});
  }
</script>

<svelte:head>
  <title>Giftcards</title>
</svelte:head>
<main class="response">
  {#each results as result}
    <div class="data">
      <img class="product_image" src={result.image} alt="A pokemon picture" />
      <p class="product_name">{result.name}</p>
    </div>
  {/each}
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  .response {
  margin-top: 100px;
  width: 100%;
  display: flex;
flex-direction: row;
  flex-wrap: wrap;
  }
.data {
  font-family: 'Lato', sans-serif;
  margin: 20px;
  padding: 20px;
  border-radius: 15px;
background-color: #242D3D;
color: #1EBAD5;
display: flex;
flex-direction: row;
  flex-wrap: wrap;
justify-content: space-around;
align-items: center;
text-align: center;
  width: 25%;
}
.product_name {
  width: 70%;
  color: #4dd2ff;
}
.currency_code {
  color: #4dd2ff;
}
.redeem_instructions {
  color: #4dd2ff;
}
.product_image {
  border-radius: 5px;
}
</style>