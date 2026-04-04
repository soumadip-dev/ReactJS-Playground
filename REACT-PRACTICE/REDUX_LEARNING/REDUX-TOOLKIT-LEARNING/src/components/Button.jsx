const Button = ({ handler, title }) => {
  const isIncrement = title.toLowerCase() === 'increment';
  return (
    <button
      onClick={handler}
      className={`${
        isIncrement ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
      } text-white font-medium px-4 py-2 rounded-xl transition`}
    >
      {title}
    </button>
  );
};

export default Button;
