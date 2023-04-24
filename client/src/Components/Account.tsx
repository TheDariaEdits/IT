import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Navigate } from 'react-router-dom'

const Account = () => {
    const {user} = useContext(UserContext)

    if (!user) {
        return <Navigate to={'/login'}/>
    }

  return (
    <div>Account</div>
  )
}

export default Account