import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom"
import axios from "axios"


const Account = () => {
  const [redirect, setRedirect] = useState<null | string>(null)
  const {ready, user, setUser} = useContext(UserContext)

  let {subpage} = useParams()
  if (subpage === undefined) {
    subpage = 'profile'
  }

  async function logout() {
    await axios.post('/auth/logout')
    setRedirect('/')
    setUser(null)
  }

  if(!ready) {
    return 'Loading...'
  }

  if(ready && !user && !redirect) {
    return <Navigate to={'/auth/login'}/>
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  function linkClasses(type: null | string) {
    let classes = 'py-2 px-6'
    if(type === subpage) {
      classes += ' bg-primary text-white rounded-full'
    }
    return classes
  }


  return (
    <div>
      <nav className='w-full flex justify-center mt-8 mb-8 gap-2'>
      <Link className={linkClasses('profile')}  to={'/dash/account'}>My Profile</Link>
        <Link className={linkClasses('bookings')} to={'/dash/account/bookings'}>My Bookings</Link>
        <Link className={linkClasses('places')} to={'/dash/account/places'}>My Places</Link>
      </nav>
      {subpage === 'profile' && (
        <div className='text-center max-w-m mx-auto'>
          Logged in as {user.name} ({user.email}) <br/>
          <button onClick={logout} className='primary max-w-sm mt-2'>Logout</button>
        </div>
      )}
    </div>
  )
}

export default Account