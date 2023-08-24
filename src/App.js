import { Route, Routes } from "react-router";
import "./App.css";
import List from "./components/List";
import Wishlist from "./components/Wishlist";
import SearchedProd from "./components/SearchedProd";
import Details from "./components/Details";
import Main from "./components/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route exact path="/search/:searched" element={<SearchedProd />} />
      <Route exact path="/wishlist" element={<Wishlist />} />
      <Route exact path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
