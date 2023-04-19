import { Outlet } from 'react-router-dom'
import DashFooter from './DashFooter'
import DashHeader from './DashHeader'


const DashLayout = () => {
  return (
    <>
        <DashHeader />
        <div className='className'>
            <Outlet />
        </div>
        <DashFooter />
    </>
  )
}

export default DashLayout