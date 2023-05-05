import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          {/*
          <Route path="/about" element={<About />}></Route>

          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
  <Route path="/sign-up" element={<SignUp />}></Route>*/}

        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
