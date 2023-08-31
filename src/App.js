import Home from "./Home";
import Navbar from "./Navbar";
import Products from "./Products";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="service" element={<Service />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
