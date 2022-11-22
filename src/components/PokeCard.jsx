import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PokeDex from "./PokeDex";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/card.css"

const PokeCard = () => {
  const [character, setCharacter] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) =>{
         setCharacter(res.data);
         setLoading(false);
        })
      
      .catch((res) => {
        setError(res);
      });
  }, [id]);
  if (error) {
    return <PokeDex error={error} />;
  }
  
  return (
    <div className="mainCard">
    {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) :(
      
      <div  className="main-Card">
        <div className="info">
          <p>HP</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${character.stats?.[0]?.base_stat}%` }}>
              {character.stats?.[0]?.base_stat}
            </div>
          </div>

          <div>
            <p>Attack</p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${character.stats?.[1]?.base_stat}%` }}>
                {character.stats?.[1]?.base_stat}
              </div>
            </div>
          </div>
          <div>
            <p>Defense</p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${character.stats?.[2]?.base_stat}%` }}>
                {character.stats?.[2]?.base_stat}
              </div>
            </div>
          </div>
          <div>
            <p>Speed</p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${character.stats?.[5]?.base_stat}%` }}>
                {character.stats?.[5]?.base_stat}
              </div>
            </div>
          </div>
        </div>
        <div>
        <h2>{character?.name?.charAt(0).toUpperCase() + character?.name?.slice(1)}</h2>
          <img src={character.sprites?.other.home.front_default} alt="" />
        </div>
      </div>
      )}
    </div>
  );
};

export default PokeCard;
