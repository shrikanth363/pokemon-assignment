import React, { Component } from "react";
import Pokecontainer from "./Pokecontainer";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=151"; //limit to 151.
class Pokegame extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pokemonList: [],
			loading: true,
		};
	}
	// side effects handling: api service call to get the pokemon list.
	componentDidMount() {
		this.getPokemons();
	}

	// fetch pokemonList. gets loaded once the app gets initialized.
	getPokemons() {
		this.setState({ loading: true });
		fetch(POKEMON_API)
			.then((response) => response.json())
			.then((pokemonRes) => {
				pokemonRes.results.forEach((pokemon) => {
					this.fetchPokemon(pokemon);
				});
			});
	}
	fetchPokemon = (pokemon) => {
		let url = pokemon.url; // Get additional details. https://pokeapi.co/api/v2/pokemon/3/
		fetch(url)
			.then((response) => response.json())
			.then((pokeData) => {
				console.log("pokeDate");
				console.log(pokeData);
				this.setState({ loading: false });
				this.setState((st) => ({
					pokemonList: [
						...st.pokemonList,
						{
							id: pokeData.id,
							name: pokeData.name,
							types: pokeData.types,
							abilities: pokeData.abilities,
							exp: pokeData.base_experience,
						},
					],
				}));
			});
	};

	render() {
		if (this.state.loading) {
			return <h1> loading.... </h1>;
		} else {
			return (
				<div>
					<h2> Pokemons </h2>
					<Pokecontainer pokemons={this.state.pokemonList} />
				</div>
			);
		}
	}
}
export default Pokegame;