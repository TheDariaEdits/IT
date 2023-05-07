import axios from "axios"
import { Dispatch, SetStateAction, useState } from "react"

type PhotoProps =  {
    addedPhotos: string[]
    onChange: Dispatch<SetStateAction<any>>
  }
  
const PhotoUploader = (props: PhotoProps) => {
    const {addedPhotos, onChange} = props
    const [photoLink, setPhotoLink] = useState('')

    async function addPhotoByLink(ev:any) {
        ev.preventDefault()
        const {data:filename} = await axios.post('/upload-by-link', {link: photoLink})
        onChange((prev: any) => {
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
          onChange((prev: any) => {
            return [...prev, ...filenames]
          })
        })
      }

  return (
    <>
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
    </>
  )
}

export default PhotoUploader