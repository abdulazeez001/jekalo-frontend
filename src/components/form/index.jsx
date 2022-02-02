import StyleForm from "./formStyle"
import { useState } from 'react';

import { BASE_URL, axiosTemplate } from './../../util/axiosHelper';
import { reformateDateOfBirth } from './../../util/index';

const Form = () =>{
    const [first_name,setFN] = useState('')
    const [last_name,setLN] = useState('')
    const [username,setUN] = useState('')
    const [dob,setDate] = useState('')

    
    let date_of_birth = dob === '' ? '':reformateDateOfBirth(dob)
   
    async function submit(e){
            e.preventDefault()
            await axiosTemplate(BASE_URL).post({first_name,last_name,username,date_of_birth})
            setTimeout(window.location.reload(),3000)
        }
    
    return(
        <StyleForm>
            <div className="form">
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" placeholder="First name" id="first_name" onChange={(e)=>{setFN(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" placeholder="Last name" id="last_name" onChange={(e)=>{setLN(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" id="username" onChange={(e)=>{setUN(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="Date" placeholder="Date of Birth" id="dob" onChange={(e)=>{setDate(e.target.value)}}/>
                </div>
            </div>

            <div className="btn">
                <button onClick={(e) =>submit(e)}>Submit</button>
            </div>
        </StyleForm>
    )}

export default Form