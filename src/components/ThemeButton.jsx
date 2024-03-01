const ThemeButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-slate-900 px-4 py-2 rounded-lg text-gray-500 font-semibold border-2 border-gray-700 hover:bg-slate-800 hover:duration-200"
    >
      Dark
    </button>
  )
}

export default ThemeButton
