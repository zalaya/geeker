import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ placeholder, handleChange, handleSubmit }) => {
  return (
    <form 
      onSubmit={handleSubmit}
      className="w-1/4 flex shadow-lg border-2 border-gray-700 rounded-xl"
    >
      <input 
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className="w-3/4 bg-slate-900 p-4 text-2xl text-gray-500 placeholder:text-gray-500 rounded-l-lg focus:outline-none"
      />
      <button
        type="submit"
        className="w-1/4 text-2xl border-l-2 border-gray-700 bg-slate-900 text-gray-500 rounded-r-lg hover:bg-slate-800 duration-200"
      >
       <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>    
    </form>
  )
}

export default SearchBar
