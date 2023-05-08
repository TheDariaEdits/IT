import { Dispatch, SetStateAction, useState } from "react"

type BusisnessProps =  {
  hours: {}
  setHrs: Dispatch<SetStateAction<any>>
}

export default function BusinessHours(props: BusisnessProps) {
  const {hours, setHrs} = props
  const [checked, setChecked] = useState(false)
  const [openField, setOpenField] = useState("")
  const [closeField, setCloseField] = useState("")

  function handleTime(e:any) {
    const {name, value} = e.target
    if(checked) {
      setHrs({...hours, [name]: value}) 
    } else{
      setHrs({...hours, [name]: '0'})
    }
  }

  return (
    <>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
        <label><input 
          type='checkbox' 
          value={1} 
          onChange={() => {
            if(checked){
              setOpenField('')
              setCloseField('')
            }
            setChecked(!checked)
          }
       }/> Sunday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              disabled={!checked}
              value={openField}
              onChange= {e => [setOpenField(e.target.value), handleTime(e)]}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              disabled={!checked}
              value={closeField} 
              onChange={e => [setCloseField(e.target.value), handleTime(e)]}/>
        </div>
      </div>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
      <label><input 
          type='checkbox' 
          value={4} 
          onChange={() => {
            if(checked){
              setOpenField('')
              setCloseField('')
            }
            setChecked(!checked)
          }
       }/> Monday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              disabled={!checked}
              value={openField}
              onChange= {e => [setOpenField(e.target.value), handleTime(e)]}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              disabled={!checked}
              value={closeField} 
              onChange={e => [setCloseField(e.target.value), handleTime(e)]}/>
        </div>  
      </div>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
      <label><input 
          type='checkbox' 
          value={5} 
          onChange={() => {
            if(checked){
              setOpenField('')
              setCloseField('')
            }
            setChecked(!checked)
          }
       }/> Tuesday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              disabled={!checked}
              value={openField}
              onChange= {e => [setOpenField(e.target.value), handleTime(e)]}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              disabled={!checked}
              value={closeField} 
              onChange={e => [setCloseField(e.target.value), handleTime(e)]}/>
        </div>     
      </div>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
      <label><input 
          type='checkbox' 
          value={6} 
          onChange={() => {
            if(checked){
              setOpenField('')
              setCloseField('')
            }
            setChecked(!checked)
          }
       }/> Wednesday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              disabled={!checked}
              value={openField}
              onChange= {e => [setOpenField(e.target.value), handleTime(e)]}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              disabled={!checked}
              value={closeField} 
              onChange={e => [setCloseField(e.target.value), handleTime(e)]}/>
        </div>        
      </div>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
      <label><input 
          type='checkbox' 
          value={7} 
          onChange={() => {
            if(checked){
              setOpenField('')
              setCloseField('')
            }
            setChecked(!checked)
          }
       }/> Thursday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              disabled={!checked}
              value={openField}
              onChange= {e => [setOpenField(e.target.value), handleTime(e)]}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              disabled={!checked}
              value={closeField} 
              onChange={e => [setCloseField(e.target.value), handleTime(e)]}/>
        </div>     
      </div>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
      <label><input 
          type='checkbox' 
          value={1} 
          onChange={() => {
            if(checked){
              setOpenField('')
              setCloseField('')
            }
            setChecked(!checked)
          }
       }/> Friday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              disabled={!checked}
              value={openField}
              onChange= {e => [setOpenField(e.target.value), handleTime(e)]}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              disabled={!checked}
              value={closeField} 
              onChange={e => [setCloseField(e.target.value), handleTime(e)]}/>
        </div>   
      </div>
      <div className="border grid sm:grid-cols-3 p-2 rounded-2xl items-center cursor-pointer my-2" >
      <label><input 
          type='checkbox' 
          value={1} 
          onChange={() => {
            if(checked){
              setOpenField('')
              setCloseField('')
            }
            setChecked(!checked)
          }
       }/> Saturday </label>
        <div>
            <h3>Open</h3>
            <input 
              type='time' 
              name='openHrs' 
              disabled={!checked}
              value={openField}
              onChange= {e => [setOpenField(e.target.value), handleTime(e)]}/>
        </div>
        <div>
            <h3>Close</h3>
            <input 
              type='time' 
              name='closeHrs' 
              disabled={!checked}
              value={closeField} 
              onChange={e => [setCloseField(e.target.value), handleTime(e)]}/>
        </div>  
      </div>
    </>
  )
}