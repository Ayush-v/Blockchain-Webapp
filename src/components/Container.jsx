const Container = ({ children }, classes) => {
  return (
    <div className={`max-w-screen-xl mx-auto py-20 px-8 ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
