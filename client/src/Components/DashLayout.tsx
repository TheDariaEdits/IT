import { Outlet } from 'react-router-dom'
import DashFooter from './DashFooter'
import DashHeader from './DashHeader'


const DashLayout = () => {
  return (
    <div>
        {/* <DashHeader /> */}
        <div>
            <Outlet />
        </div>
        {/* <DashFooter /> */}
    </div>
  )
}

export default DashLayout