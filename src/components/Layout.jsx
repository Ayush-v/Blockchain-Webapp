import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="mt-16">{children}</div>
    </>
  );
};

export default Layout;