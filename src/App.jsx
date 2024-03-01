import UserCard from "./components/UserCard"

const App = () => {
  const user = {
    name: "Buenas",
    description: "Prueba",
    bio: "Estoes una descipr de prueba",
    login: "buenas"
  }

  return (
    <div
      className="min-h-screen bg-gray-900"  
    >
      <UserCard
        user={user}
      />
    </div>
    
  )
}

export default App
