function Button({ classname, type, children }) {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;