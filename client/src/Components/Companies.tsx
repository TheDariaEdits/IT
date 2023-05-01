import axios from 'axios'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const Companies = () => {
  const { action } = useParams()
  const [details, setDetails] = useState({
    company: '',
    address: '',
    about: '',
    services: {},
    businesshours: {},
    extrainfo: '',
    photos: []
  })
  const [photoLink, setPhotoLink] = useState('')

  const handleChange = (e:any) => {
    const name = e.target.name
    const value = e.target.value
    setDetails((prev) => {
      return {...prev, [name]:value }
    })
  }

  async function addPhotoByLink(ev:any) {
    ev.preventDefault()
    await axios.post('/upload-by-link', {link: photoLink})
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
          <form>
            <h2 className='text-2xl mt-4'>Company</h2>
            <input type='text' placeholder='company' name='company' onChange={handleChange}/>
            <h2 className='text-2xl mt-4'>Address</h2>
            <input type='text' placeholder='address' name='address' onChange={handleChange}/>
            <h2 className='text-2xl mt-4'>About</h2>
            <textarea placeholder='Tell us about your company' name='about' onChange={handleChange}/>
            <h2 className='text-2xl mt-4'>Extra Info</h2>
            <textarea placeholder='i.e. cancellation and other policies' name='extrainfo' onChange={handleChange}/>
            <h2 className='text-2xl mt-4'>Photos</h2>
            <div className='flex gap-2'>
              <input type='text' name= 'photoLink' placeholder='Add using link' onChange={ev => setPhotoLink(ev.target.value)}/>
              <button className='bg-primary text-white px-4 rounded-2xl' onClick={addPhotoByLink}>Add photos</button>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              <button className='border bg-transparent rounded-2xl p-8 text-2xl' name='photos' onChange={handleChange}>+</button>
            </div>
            <div>
              <h2 className='text-2xl mt-4'>Add Services</h2>
              <div className='flex'>
                <input type='text' placeholder='service name'/>
                <label className='flex mx-8'>$
                <input type='number' placeholder='0.00'/></label>
              </div>
              <input type='text' placeholder='description: optional'/>
            </div>
            <h2 className='text-2xl mt-4'>Business Hours</h2>
            <div className='grid sm:grid-cols-4 gap-6'>
              <div className=''>
                <h3>Day</h3>
                <input type="text" defaultValue={'Sunday'} readOnly={true}/>
              </div>
              <div>
                <h3>Open</h3>
                <input type='time' />
              </div>
              <div>
                <h3>Close</h3>
                <input type='time' />
              </div>
              <div className='r'>
                <h3>Closed</h3>
                <input type='checkbox' value={'Closed'}/>
              </div>
            </div>
          </form>
          <div>
            <button className='primary my-4'>Save</button>
          </div>
        </div>
      )}
        
    </div>
  )
}

export default Companies