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
    businesshours: {},
    extrainfo: '',
  })
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
              <div className='h-32'>
                <img className='rounded-2xl' src={'http://localhost:4000/uploads/' + link} alt="" />
              </div>)}
              <label className='h-32 cursor-pointer border bg-transparent rounded-2xl p-8 text-2xl'>
              <input type='file' multiple className='hidden' onChange={uploadPhoto}/>
              +
              </label>
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
            <BusinessHours/>
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