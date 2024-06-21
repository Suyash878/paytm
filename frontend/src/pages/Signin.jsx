import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { ButtonWarning } from "../components/ButtonWarning"
import { Subheading } from "../components/Subheading"
import { Button } from "../components/Button"

export function Signin()
{
    return (
        <div className="bg-neutral-400 h-screen w-screen flex justify-center items-center">
            <div className="bg-slate-200 h-128 w-128 rounded-md p-4">
                <Heading label={"Sign In"}></Heading>
                <Subheading label={"Enter your credentials to access your account"}></Subheading>
                <Input label ={"Email"}></Input>
                <Input label ={"Password"}></Input>
                <div className="py-6">
                <Button label={"Sign In"}></Button>
                </div>
                <div className="">
                    <ButtonWarning label = {"Don't have an account?"} Buttontext={"Sign Up"} to={"/signup"}></ButtonWarning>
                </div>
            </div>
        </div>
    )
}