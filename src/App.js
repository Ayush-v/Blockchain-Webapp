import Navbar from "components/Navbar";
import Chart from "pages/Chart";
import Exchanges from "pages/Exchanges";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/chart" element={<Chart />} />
          <Route exact path="/exchanges" element={<Exchanges />} />
        </Routes>
      </div>
      <footer className="mt-auto">
        <p className="flex justify-center text-slate-500 my-6">
          © 2022 All rights reserved by Ayush-v
        </p>
      </footer>
    </>
  );
}

export default App;
