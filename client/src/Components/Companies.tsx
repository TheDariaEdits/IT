import { Link, useParams } from 'react-router-dom'


const Companies = () => {
  const { action } = useParams()

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
            <input type='text' placeholder='company' />
            <h2 className='text-2xl mt-4'>Address</h2>
            <input type='text' placeholder='address' />
            <h2 className='text-2xl mt-4'>About</h2>
            <textarea name='about' placeholder='Tell us about your company'/>
            <h2 className='text-2xl mt-4'>Extra Info</h2>
            <input type='text' placeholder='extra info' />
            <h2 className='text-2xl mt-4'>Photos</h2>
            <div className='flex gap-2'>
              <input type='text' placeholder='Add using link'/>
              <button className='bg-primary text-white px-4 rounded-2xl'>Add photos</button>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              <button className='border bg-transparent rounded-2xl p-8 text-2xl'>+</button>
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

          </form>
        </div>
      )}
        
    </div>
  )
}

export default Companies