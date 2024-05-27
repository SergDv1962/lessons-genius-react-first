import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

const L45 = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default L45;
