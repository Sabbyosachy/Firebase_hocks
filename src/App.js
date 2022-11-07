import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hader from "./Pages/Hader/Hader";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import Order from "./Pages/Order/Order";
import Login from "./Pages/SignUp/Login";

function App() {
  return (
    <div className="App">
      <Hader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="produt" element={<Product />} />
        <Route path="order" element={<Order />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
