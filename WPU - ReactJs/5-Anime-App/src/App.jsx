import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import animesData from "./config/animes";
import { useState } from "react";
import Search from "./components/Search";
import Numresult from "./components/NumResult";

export default function App() {
  const [animes, setAnimes] = useState(animesData);

  return (
    <>
      <Navbar>
        <Search>
          <Numresult animes={animes} />
        </Search>
      </Navbar>
      <Main animes={animes} />
    </>
  );
}
