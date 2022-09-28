import React,{useState} from "react";
import './Form.css';
const Form=()=>{
    const[name, setName]=useState('');
    return(
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="submit"/>
        </div>

    );
}
export default Form;