import { Dispatch, SetStateAction } from "react"

type BusisnessProps =  {
  openDays: string
  onChange: Dispatch<SetStateAction<any>>
}

export default function BusinessHours(props: BusisnessProps) {
  const {openDays, onChange} = props
  function handleDays(e: any) {
    const {checked, name} = e.target
    if(checked){
      onChange([...openDays, name])
    } 
  }

  // function handleHrs(e: any) {
  //   const {name, value} = e.target
  //   if(name === 'open'){
  //     onChange([...openTime, value])
  //   } else{}
  // }

  return (
    <>
      <label className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
        <h3><input type='checkbox' name ='Sunday' onChange={handleDays}/> Sunday </h3>
        <div>
            <h3>Open</h3>
            <input type='time' name='open' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' name='close'/>
        </div>
      </label>
      <label className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
        <h3><input type='checkbox' name="Monday"/> Monday</h3>
        <div>
            <h3>Open</h3>
            <input type='time' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' />
        </div>
                
      </label>
      <label className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
        <h3><input type='checkbox' name="Tuesday"/> Tuesday</h3>
        <div>
            <h3>Open</h3>
            <input type='time' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' />
        </div>         
      </label>
      <label className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
        <h3><input type='checkbox' name="Wednesday"/> Wednesday</h3>
        <div>
            <h3>Open</h3>
            <input type='time' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' />
        </div>        
      </label>
      <label className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
        <h3><input type='checkbox' name="Thursday"/> Thursday</h3>
        <div>
            <h3>Open</h3>
            <input type='time' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' />
        </div>       
      </label>
      <label className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
        <h3><input type='checkbox' name="Friday"/> Friday</h3>
        <div>
            <h3>Open</h3>
            <input type='time' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' />
        </div>     
      </label>
      <label className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
        <h3><input type='checkbox' name="Saturday"/> Saturday</h3>
        <div>
            <h3>Open</h3>
            <input type='time' />
        </div>
        <div>
            <h3>Close</h3>
            <input type='time' />
        </div>     
      </label>
    </>
  )
}