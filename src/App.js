import Navbar from "components/Navbar";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
