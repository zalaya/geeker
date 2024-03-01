const ThemeButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="dark:bg-slate-900 bg-gray-50  px-4 py-2 rounded-lg text-gray-700 font-semibold border-2 dark:border-gray-700 border-gray-300"
    >
      Dark
    </button>
  )
}

export default ThemeButton
