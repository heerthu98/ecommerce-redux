import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import HomeLayout from "./layouts/HomeLayout";

import Cart from "./view/Cart";
import Header from "./view/Header";
import MenWear from "./view/category/MenWear";
import WomenWear from "./view/category/WomenWear";
import KidsWear from "./view/category/KidsWear";
import Boss from "./view/Brands/Boss";
import Columbia from "./view/Brands/Columbia";
import TommyHilifiger from "./view/Brands/TommyHilifiger";
import Jewellery from "./view/category/Jewellery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Products />} />
          <Route path="/header" element={<Header />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menWear" element={<MenWear />} />
          <Route path="/womenWear" element={<WomenWear />} />
          <Route path="/kidsWear" element={<KidsWear />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/boss" element={<Boss />} />
          <Route path="/columbia" element={<Columbia />} />
          <Route path="/tommyHilifiger" element={<TommyHilifiger />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
