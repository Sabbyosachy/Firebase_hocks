import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hader from "./Pages/Hader/Hader";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import Order from "./Pages/Order/Order";
import Login from "./Pages/SignUp/Login";
import Register from "./Pages/SignUp/Register";
import AuthProvider from "./Pages/Context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Hader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="produt" element={<Product />} />
          <Route path="order" element={<Order />} />
          <Route path="register" element={<Register />} />
          {<Route path="login" element={<Login />} />}
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
