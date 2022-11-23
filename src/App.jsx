import "./App.css";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeList from "./components/PokeList";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokelist" element={<PokeList />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
