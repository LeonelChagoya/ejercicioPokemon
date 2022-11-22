import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import UserInput from "./components/UserInput";
import "./App.css";
import PokeCard from "./components/PokeCard";
import ProtectedRoutes from "./components/ProtecteRoutes";
import PokeDex from "./components/PokeDex";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<UserInput />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/PokeDex" element={<PokeDex />} />
          <Route path="/PokeDex/:id" element={<PokeCard />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
