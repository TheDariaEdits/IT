import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Navigate } from "react-router-dom"


const Account = () => {
  const {ready, user} = useContext(UserContext)

  if(ready && !user) {
    return <Navigate to={'/login'}/>
  }
  return (
    <div>Account page for {user.name}</div>
  )
}

export default Account