import axios from 'axios'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BusinessHours from './BusinessHours'


const Companies = () => {
  const { action } = useParams()
  const [details, setDetails] = useState({
    company: '',
    address: '',
    about: '',
    services: {},
    extrainfo: '',
  })

  const [businesshours, setBusinessHours] = useState('')
  const [photoLink, setPhotoLink] = useState('')
  const [addedPhotos, setAddedPhotos] = useState<any[]>([])

  const handleChange = (e:any) => {
    const name = e.target.name
    const value = e.target.value
    setDetails((prev) => {
      return {...prev, [name]:value }
    })
  }

  async function addPhotoByLink(ev:any) {
    ev.preventDefault()
    const {data:filename} = await axios.post('/upload-by-link', {link: photoLink})
    setAddedPhotos((prev) => {
      return [...prev, filename]
    })
    setPhotoLink('')
  }

  function uploadPhoto(e: any) {
    const files = e.target.files
    const data = new FormData()
    for (let i = 0; i < files.length; i++){
      data.append('photos', files[i])
    }
    axios.post('/upload', data, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(res => {
      const {data:filenames} = res
      setAddedPhotos((prev) => {
        return [...prev, ...filenames]
      })
    })
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
            {/* add autocomplete w/ google maps api https://www.tracylum.com/blog/2017-05-20-autocomplete-an-address-with-a-react-form/ */}
            <h2 className='text-2xl mt-4'>About</h2>
            <textarea placeholder='Tell us about your company' name='about' onChange={handleChange}/>
            <h2 className='text-2xl mt-4'>Extra Info</h2>
            <textarea placeholder='i.e. cancellation and other policies' name='extrainfo' onChange={handleChange}/>
            <h2 className='text-2xl mt-4'>Photos</h2>
            <div className='flex gap-2'>
              <input type='text' name= 'photoLink' placeholder='Add using link' onChange={ev => setPhotoLink(ev.target.value)}/>
              <button className='bg-primary text-white px-4 rounded-2xl' onClick={addPhotoByLink}>Add photos</button>
            </div>
            
            <div className='grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6'>
              {addedPhotos.length > 0 && addedPhotos.map((link:string) => 
              <div className='h-32' key={link}>
                <img className='rounded-2xl' src={'http://localhost:4000/uploads/' + link} alt="" />
              </div>)}
              <label className='h-32 flex cursor-pointer border bg-transparent rounded-2xl gap-1 p-8 text-2xl items-center'>
              <input type='file' multiple className='hidden' onChange={uploadPhoto}/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
              </svg>
              Upload
              </label>
            </div>
            <div>
              <h2 className='text-2xl mt-4'>Add Services</h2>
              {/* add button to dynamically add more input fields so you can add all the services, also do a drop down menu w/ common services w/ an other option  */}
              <div className='flex'>
                <input type='text' placeholder='service name'/>
                <label className='flex mx-8'>$
                <input type='number' placeholder='0.00'/></label>
              </div>
              <input type='text' placeholder='description: optional'/>
            </div>
            <h2 className='text-2xl mt-4'>Business Hours</h2>
            <BusinessHours openDays={businesshours} onChange={setBusinessHours}/>
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