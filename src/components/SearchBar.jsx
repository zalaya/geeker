import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ placeholder, handleChange, handleSubmit }) => {
  return (
    <form 
      onSubmit={handleSubmit}
      className="w-1/4 flex shadow-lg border-2 dark:border-gray-700 border-gray-300 rounded-xl"
    >
      <input 
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className="w-3/4 dark:bg-slate-900 bg-gray-50 p-4 text-2xl text-gray-500 placeholder:text-gray-500 rounded-l-lg focus:outline-none"
      />
      <button
        type="submit"
        className="w-1/4 text-2xl border-l-2 dark:border-gray-700 border-gray-300 dark:bg-slate-900 bg-gray-50 text-gray-500 rounded-r-lg dark:hover:bg-gray-800 hover:bg-gray-200 hover:duration-200"
      >
       <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>    
    </form>
  )
}

export default SearchBar
