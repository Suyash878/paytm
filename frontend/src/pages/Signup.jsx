import {Heading} from '../components/Heading'
import { Subheading } from '../components/Subheading'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { ButtonWarning } from '../components/ButtonWarning'

export const Signup = ()=>
{
    return (
    
    <div className='flex display-center bg-neutral-400 h-screen w-screen justify-center items-center font-Poppins p-4 '>
        <div className='flex flex-col justify-center border-black max-w-full max-h-full mt-2'>
            <div className=' bg-slate-200 h-160 w-128 my-32 rounded-lg border-4 p-4 shadow-2xl'>
                <Heading label = {"Sign Up"}></Heading>
                <Subheading label = {"Enter your information to create an account"}></Subheading>
                <Input placeholder="Enter your first Name" label = {"First Name"}></Input>
                <Input placeholder="Enter your Last Name" label = {"Last Name"}></Input>
                <Input placeholder="" label = {"Email"}></Input>
                <Input placeholder="" label = {"Password"}></Input>
                <div className='4pt'>
                    <Button label = {"Sign Up"}></Button>
                </div>
                <div>
                    <ButtonWarning label = {"Already have an account?"} Buttontext = {"Sign in"} to={"/signin"}></ButtonWarning>
                </div>
            </div>            
        </div>
    </div>
    )
}
