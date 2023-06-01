import { Dispatch, SetStateAction, useState } from "react"

type BusisnessProps =  {
  hours: {}
  setHrs: Dispatch<SetStateAction<any>>
}

export default function BusinessHours(props: BusisnessProps) {
  const {hours, setHrs} = props
  const [checked, setChecked] = useState(false)
 

  function handleTime(e:any) {
    const {type, name, value} = e.target
    if(checked) {
      console.log(value)}
      // setHrs({...hours, [name]: value}) 
    // } else{
    //   setHrs({...hours, [name]: '0'})
    // }

  }

  return (
    <>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" onChange={e => handleTime(e)}>
        <label><input 
          type='checkbox' 
          value={'Sunday'} 
       /> Sunday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              />
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs'  
              />
        </div>
      </div>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
      <label><input 
          type='checkbox' 
          value={4} 
          /> Monday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              onChange= {e => handleTime(e)}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              onChange={e => handleTime(e)}/>
        </div>  
      </div>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
      <label><input 
          type='checkbox' 
          value={5} 
          /> Tuesday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              onChange= {e => handleTime(e)}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              onChange={e => handleTime(e)}/>
        </div>     
      </div>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
      <label><input 
          type='checkbox' 
          value={6} 
          /> Wednesday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              onChange= {e => handleTime(e)}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              onChange={e => handleTime(e)}/>
        </div>        
      </div>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
      <label><input 
          type='checkbox' 
          value={7} 
          /> Thursday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              onChange= {e => handleTime(e)}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              onChange={e => handleTime(e)}/>
        </div>     
      </div>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
      <label><input 
          type='checkbox' 
          value={1} 
          /> Friday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              onChange= {e => handleTime(e)}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              onChange={e => handleTime(e)}/>
        </div>   
      </div>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
      <label><input 
          type='checkbox' 
          value={1} 
          /> Saturday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              onChange= {e => handleTime(e)}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              onChange={e => handleTime(e)}/>
        </div>  
      </div>
    </>
  )
}