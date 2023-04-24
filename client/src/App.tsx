import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Public from './Components/Public'
import Login from './Components/Login'
import DashLayout from './Components/DashLayout'
import Home from './Components/Home'
import Register from './Components/Register'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import Account from './Components/Account'


axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
      <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />}/>
        <Route path='/auth/login' element={<Login />}/>
        <Route path='/auth/register' element={<Register />}/>

        <Route path='dash' element={<DashLayout />}>
          <Route index element={<Home />}/>
          <Route path='/account' element={<Account />}/>

        </Route>{/* End Dash */}

        </Route> 
      </Routes>
    </UserContextProvider>
    
  )
}

export default App