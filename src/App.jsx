import { useEffect, useState } from "react"
import UserCard from "./components/UserCard"
import SearchBar from "./components/SearchBar"
import ThemeButton from "./components/ThemeButton"

const App = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark")
    } else {
      document.querySelector("html").classList.remove("dark")
    }
  }, [theme])

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUser(data))
  }

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  const handleClick = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 dark:bg-gray-900 bg-gray-50">
      <div className="absolute top-5 right-5">
        <ThemeButton handleClick={handleClick} />
      </div>
      
      <SearchBar 
        placeholder="GitHub username..."
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {user && user.message !== "Not Found" && (
        <UserCard user={user} />
      )}
    </div>
  ) 
}

export default App
