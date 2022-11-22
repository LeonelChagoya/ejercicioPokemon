import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokeItem from "./PokeItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/pokeItems.css";

const PokeDex = ({ error }) => {
  const user = useSelector((state) => state.user);

  const [characters, setCharacters] = useState([]);
  const [characterSearch, setCharacterSearch] = useState("");
  const [types, setTypes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154")
      .then((res) => setCharacters(res.data.results));

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setTypes(res.data.results));
  }, []);

  const search = (e) => {
    e.preventDefault();

    navigate(`/PokeDex/${characterSearch}`);
  };
  

  function btTryAgain() {
    navigate(`/PokeDex`);
  }
  const filterType = (e) => {
    e.preventDefault();
    axios
      .get(e.target.value)
      .then((res) => setCharacters(res.data.pokemon))
      .catch((res) => console.log(res));
  };

  //paginacion//
  const [page, setPage] = useState(1);
  const lastIndex = page * 12;
  const firstIndex = lastIndex - 12;
  const pokePagination = characters.slice(firstIndex, lastIndex);
  const lastPage = Math.ceil(characters.length / 12);

  const numbers = [];

  return (
    <div className="conteiner-main">
      <p className="text-welcome">You welcome {user}</p>
     
      <form onSubmit={search} class="form-main" >
           <input
          type="text"
          className="form-control"
          value={characterSearch}
          onChange={(e) => setCharacterSearch(e.target.value)}
          placeholder={
            characterSearch == ""
              ? "no pokemon yet, please submit a pokemon!"
              : ""
          }
        />
        
        <button class="btn btn-success">Search</button>
      </form>
     
      {error ? <button onClick={btTryAgain}> try again </button> : null}
      <div className="main-select">
        <p>Select by type</p>
      <select onChange={filterType} className="form-select form-select-lg mb-3">
        <option value="">Type </option>
        {types.map((type) => (
          <option value={type.url} key={type.url}>
            {type.name}{" "}
          </option>
        ))}
      </select>
      </div>

      <ul className="main-card">
        {pokePagination.map((character) => (
          <PokeItem
            characterUrl={
              character.url ? character.url : character.pokemon?.url
            }
            key={character.url ? character.url : character.pokemon?.url}
          />
        ))}
      </ul>

      <div className="paginationButton">
        <button
          className="bt-pag"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}>
          <i className="fi fi-sr-arrow-circle-left"></i>
        </button>
        <button
          className="bt-pag"
          onClick={() => setPage(page + 1)}
          disabled={page === lastPage}>
          <i className="fi fi-ss-arrow-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PokeDex;
