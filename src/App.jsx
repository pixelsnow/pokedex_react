import "./App.css";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import PokeList from "./components/PokeList";
import About from "./components/About";
import Home from "./components/Home";
import PokeSingle from "./components/PokeSingle";
import React, { Component } from "react";

// THIS IS A WORKAROUND to pass parameters to a class component
const RouterWrapper = (props) => {
  // Currently props is empty
  const params = useParams();
  console.log("params is");
  console.log(params);
  return <PokeSingle params={params} {...props} />;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokelist" element={<PokeList />} />
            <Route path="pokeList/:pokesingle" element={<RouterWrapper />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
