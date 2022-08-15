// Making container component for all pages and component for same width and resposiveness

const Container = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto my-14 px-8 py-20 sm:py-24">
      {children}
    </div>
  );
};

export default Container;
