import {Heading} from '../components/Heading'
import { Subheading } from '../components/Subheading'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { ButtonWarning } from '../components/ButtonWarning'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Signup = ()=>
{
    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [username,setusername] = useState("");
    const [password,setpassword] = useState(""); 
    const navigate = useNavigate();

    return (
    
    <div className='flex display-center bg-neutral-400 h-screen w-screen justify-center items-center font-Poppins p-4 '>
        <div className='flex flex-col justify-center border-black max-w-full max-h-full mt-2'>
            <div className=' bg-slate-200 h-160 w-128 my-32 rounded-lg border-4 p-4 shadow-2xl'>
                <Heading label = {"Sign Up"}></Heading>
                <Subheading label = {"Enter your information to create an account"}></Subheading>
                <Input placeholder="Enter your first Name" label = {"First Name"} onChange={(e) =>{
                    setfirstName(e.target.value)
                }}></Input>
                <Input placeholder="Enter your Last Name" label = {"Last Name"} onChange={(e) =>{
                    setlastName(e.target.value)
                }}></Input>
                <Input placeholder="" label = {"Email"} onChange={(e) =>{
                    setusername(e.target.value)
                }}></Input>
                <Input placeholder="" label = {"Password"} onChange={(e) =>{
                    setpassword(e.target.value)
                }}></Input>
                <div className='4pt'>
                    <Button label = {"Sign Up"}
                    onClick = {
                            async () => 
                            {
                                const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                                username,
                                firstName,
                                lastName,
                                password
                                });
                                localStorage.setItem("token", response.data.token);
                                navigate("/dashboard?" + "token=" + localStorage.getItem("token"));
                            }
                     
                    }
                    ></Button>
                </div>
                <div>
                    <ButtonWarning label = {"Already have an account?"} Buttontext = {"Sign in"} to={"/signin"}></ButtonWarning>
                </div>
            </div>            
        </div>
    </div>
    )
}
