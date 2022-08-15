import Layout from "components/Layout";
import Chart from "pages/Chart";
import Exchanges from "pages/Exchanges";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Layout for navbar and footer */}
      <Layout>
        {/* All Routes */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/chart" element={<Chart />} />
          <Route exact path="/exchanges" element={<Exchanges />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
