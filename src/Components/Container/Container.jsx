const Container = ({ children, className }) => {
  return (
    <div className={`px-4 container mx-auto w-full ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container;
