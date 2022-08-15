import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="mt-16 max-w-screen-xl mx-auto">{children}</div>
      <footer className="mt-auto">
        <p className="flex justify-center text-slate-500 my-6">
          © 2022 All rights reserved by Ayush-v
        </p>
      </footer>
    </>
  );
};

export default Layout;
