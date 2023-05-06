import React from 'react'

const BusinessHours = () => {
  return (
    <>
      <label className="border grid sm:grid-cols-4 p-2 rounded-2xl items-center cursor-pointer my-2">
        <span>Sunday</span>
        <div>
            <h3>Open</h3>
            <input type='time' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' />
        </div>
        <h3>Closed <input type='checkbox' value={'Closed'}/> </h3>
      </label>
      <label className="border grid sm:grid-cols-4 p-2 rounded-2xl items-center cursor-pointer my-2">
        <span>Monday</span>
        <div>
            <h3>Open</h3>
            <input type='time' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' />
        </div>
        <h3>Closed <input type='checkbox' value={'Closed'}/> </h3>        
      </label>
      <label className="border grid sm:grid-cols-4 p-2 rounded-2xl items-center cursor-pointer my-2">
        <span>Tuesday</span>
        <div>
            <h3>Open</h3>
            <input type='time' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' />
        </div>
        <h3>Closed <input type='checkbox' value={'Closed'}/> </h3>         
      </label>
      <label className="border grid sm:grid-cols-4 p-2 rounded-2xl items-center cursor-pointer my-2">
        <span>Thursday</span>
        <div>
            <h3>Open</h3>
            <input type='time' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' />
        </div>
        <h3>Closed <input type='checkbox' value={'Closed'}/> </h3>        
      </label>
      <label className="border grid sm:grid-cols-4 p-2 rounded-2xl items-center cursor-pointer my-2">
        <span>Friday</span>
        <div>
            <h3>Open</h3>
            <input type='time' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' />
        </div>
        <h3>Closed <input type='checkbox' value={'Closed'}/> </h3>       
      </label>
      <label className="border grid sm:grid-cols-4 p-2 rounded-2xl items-center cursor-pointer my-2">
        <span>Saturday</span>
        <div>
            <h3>Open</h3>
            <input type='time' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' />
        </div>
        <h3>Closed <input type='checkbox' value={'Closed'}/> </h3>     
      </label>
    </>
  )
}

export default BusinessHours