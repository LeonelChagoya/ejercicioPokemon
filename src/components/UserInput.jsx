import React, { useState } from "react";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/userInput.css";

//4. importar y ejecutar useDispatch
const UserInput = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(changeUser(userName)); //guardamos y enviamos el valor de input
    navigate("/PokeDex");
  };
  //interfas de usuario
  return (
    <div className="main">
      <div className="div-left"></div>
      <div className="div-right">
        <div className="div-pokeR">
          <div className="div-pokeRinfe">
            <div className="div-lineR"></div>
          </div>
        </div>
      </div>
      <div className="conteiner-form">
        <form className="formUser" onSubmit={submit}>
          <div className="mb-3">
            <label className="form-label">Enter your username</label>
            <input
              type="text"
              className="form-control"
              value={userName} //se guarda el valor
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
