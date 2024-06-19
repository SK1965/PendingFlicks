import { useState } from "react"

// eslint-disable-next-line react/prop-types
export default function Input({addval}){
    const [nam,setnam] = useState("");
    return(<div className='bottom'>
        <span><input id="idname"  value={nam}  type="text" onChange={(e)=>setnam(e.target.value)} onKeyDown={(event)=>{if (event.key === 'Enter') {
      const val = event.target.value;
      if(val)
      addval(val);
      setnam("")
       }}}/> </span>
        <span><button type="button" className="btn btn-success btn" onClick={()=>{
            if(nam){
             addval(nam);
             setnam("");
        }
        }}>Add</button></span>
        
        </div>)

}