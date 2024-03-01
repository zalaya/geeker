const UserCard = ({ user }) => {
  return (
    <div className="w-1/4 p-5 rounded-lg border border-gray-700 bg-slate-900 shadow-xl">
      <a href={user.html_url}>
        <div className="flex gap-5">
          <img 
            src={user.avatar_url} 
            alt={user.login}
            className="rounded w-1/5"
          />
          <p className="text-xl font-semibold">
            <span className="text-gray-500">{user.login}/</span>
            <span className="text-gray-300"> {user.name}</span>
          </p>
        </div>
        <p className="text-sm text-gray-500 mt-5">
          {user.bio && user.bio !== "" ? user.bio : "No biography provided."}
        </p>
      </a>
    </div>
  )
}

export default UserCard