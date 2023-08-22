import { Route, Routes } from "react-router";
import "./App.css";
import List from "./components/List";
import SearchedProd from "./components/SearchedProd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route exact path="/search/:searched" element={<SearchedProd />} />
    </Routes>
  );
}

export default App;
