import axios from 'axios'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import BusinessHours from './BusinessHours'
import PhotoUploader from './PhotoUploader'


const Companies = () => {
  const { action } = useParams()
  const [details, setDetails] = useState({
    company: '',
    address: '',
    about: '',
    extrainfo: '',
  })
  const [addedPhotos, setAddedPhotos] = useState<any[]>([])
  const [services, setServices] = useState({})
  const [serviceName, setServiceName] = useState('')
  const [servicePrice, setServicePrice] = useState('')
  const [serviceDesc, setServiceDesc] = useState('')
  const [hours, setHrs] = useState('')
  const [redirect, setRedirect] = useState('')
 

  const handleChange = (e:any) => {
    const name = e.target.name
    const value = e.target.value
    setDetails((prev) => {
      return {...prev, [name]:value }
    })
  }

  const handleServices = (e: any) => {
    setServices({...services, serviceName, servicePrice, serviceDesc})
  }

  async function addNewCompany(e:any) {
    e.preventDefault()
    await axios.post('/companies', {details, addedPhotos, hours})
    setRedirect('/dash/account/companies')
  }

  if(redirect) {
    return <Navigate to={redirect}/>
  }

  return (
    <div>
        {action !== 'new' && (
          <div className='text-center'>
            <Link className='bg-primary text-white py-2 px-2 rounded-full' to={'/dash/account/companies/new'}>Add new company</Link>
          </div>
        )}
      {action === 'new' && (
        <div className='text-left'>
          <form onSubmit={addNewCompany}>
            <h2 className='text-2xl mt-4'>Company</h2>
            <input type='text' placeholder='company' name='company' onChange={handleChange}/>
            <h2 className='text-2xl mt-4'>Address</h2>
            <input type='text' placeholder='address' name='address' onChange={handleChange}/>
            <h2 className='text-2xl mt-4'>About</h2>
            <textarea placeholder='Tell us about your company' name='about' onChange={handleChange}/>
            <h2 className='text-2xl mt-4'>Extra Info</h2>
            <textarea placeholder='i.e. cancellation and other policies' name='extrainfo' onChange={handleChange}/>
            <h2 className='text-2xl mt-4'>Photos</h2>
            <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
            <div>
              <h2 className='text-2xl mt-4'>Add Services</h2>
              {/* add button to dynamically add more input fields so you can add all the services, also do a drop down menu w/ common services w/ an other option  */}
              <div className='flex'>
                <input type='text' placeholder='service name' onChange={e => setServiceName(e.target.value)}/>
                <label className='flex mx-8'>$
                <input type='number' placeholder='0.00' onChange={e => setServicePrice(e.target.value)}/></label>
              </div>
              <input type='text' placeholder='description: optional' onChange={e => setServiceDesc(e.target.value)}/>
            </div>
            <h2 className='text-2xl mt-4'>Business Hours</h2>
            <BusinessHours 
            hours={hours} setHrs={setHrs}
            />
            <div>
            <button className='primary my-4'>Save</button>
          </div>
          </form>
        </div>
      )}
        
    </div>
  )
}

export default Companies