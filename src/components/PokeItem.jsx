import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/pokeItems.css"
const PokeItem = ({ characterUrl }) => {
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(characterUrl)
    .then((res) => setCharacter(res.data))
   ;
  }, []);
  // color del fondo dependiendo del tipo
  const colorType = 
  ["rgb(220 20 60 / 50%)", "#6495ED","#7CFC00","#9ACD32",
  "#A9A9A9","#6D4C41","#CE93D8", "#FFEE58",
  "#8D6E63","#fdcae1", "#d2bead", "#b28405","#00ffff"];
  return (
    <div
      className="card"
      key={characterUrl}
      style={{
        background:
          character.types?.[0]?.type.name == "fire" ? colorType[0]:
          character.types?.[0]?.type.name == "water" ?colorType[1]:  
          character.types?.[0]?.type.name == "grass" ?colorType[2]:
          character.types?.[0]?.type.name == "bug" ?colorType[3]:
          character.types?.[1]?.type.name == "flying" ?colorType[5]:
          character.types?.[0]?.type.name == "poison" ?colorType[6]:
          character.types?.[0]?.type.name == "electric" ?colorType[7]:
          character.types?.[0]?.type.name == "ground" ?colorType[8]:
          character.types?.[0]?.type.name == "fairy" ?colorType[9]:
          character.types?.[0]?.type.name == "fighting" ?colorType[10]:
          character.types?.[0]?.type.name == "psychic" ?colorType[11]:
          character.types?.[0]?.type.name == "ice" ?colorType[12]:
           colorType[4] ,
      }}>
   
      <div onClick={() => navigate(`/PokeDex/${character.id}`)}>
        <img
          src={character.sprites?.other.home.front_default}
          alt=""
          className="card-img-top"
        />

        <div className="card-body">
          <h2 className="card-title">{character.name}</h2>
          <span className="card-subtitle mb-2 text-muted">Type</span>
          <p>
            {" "}
            {character.types?.[0]?.type.name}/{character.types?.[1]?.type.name}{" "}
          </p>

         
        </div>
      </div>
    </div>
  );
};

export default PokeItem;
