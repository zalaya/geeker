const SearchBar = ({ placeholder, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
