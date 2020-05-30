import React, { useState } from "react";
import Pokecard from "./Pokecard";
import "./Pokecontainer.css";
import Modal from "./Modal/Modal";


//implemented using hooks.
const Pokecontainer = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [typesOfPokemon, setTypesOfPokemon] = useState('');
  const [nameOfPokemon, setNameOfPokemon] = useState('');
  const [abilityOfPokemon, setAbilityOfPokemon] = useState('');
  const [exp, setExp] = useState('');


  // responsible for actions once pokemon image is clicked. sets the state that are passed to the Pokecard.
 const handlePokeClick = (e, p) => {
    let typeStr = " ";
    let abilityStr = " ";
    for (let i = 0; i < p.types.length; i++) {
      typeStr += p.types[i].type.name + " ";
    }
    for (let i = 0; i < p.abilities.length; i++) {
      abilityStr += p.abilities[i].ability.name + " ";
    }
    setShowModal(true);
    setTypesOfPokemon(typeStr);
    setNameOfPokemon(p.name);
    setAbilityOfPokemon(abilityStr);
    setExp(p.exp);

  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

    return (
      <>
        <div className="Pokecontainer">
          <div className="Pokecontainer-cards">
            {props.pokemons.map((p) => (
              <Pokecard
                id={p.id}
                name={p.name}
                types={p.types}
                abilities={p.abilities}
                exp={p.exp}
                onClick={(e) => handlePokeClick(e, p)}
              />
            ))}
          </div>
        </div>

        <Modal
          onClose={handleClose}
          name={nameOfPokemon}
          exp={exp}
          ability={abilityOfPokemon}
          type={typesOfPokemon}
          show={showModal}
        />
      </>
    );
  }

export default Pokecontainer;
