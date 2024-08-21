import { Button2 } from "../components/button2"
export function Landing()
{
    return (
        <div className="flex flex-col min-h-[100dvh] font-roboto scroll-smooth">
            <div className="flex justify-between px-4 lg:px-6 h-14 items-center text-small ">
                <div>
                    symbol
                </div>
                <div className="flex px-4 text-sm font-medium">
                    <div className="px-2 cursor-pointer hover:underline underline-offset-4">
                        Features
                    </div>
                    <div className="px-2 cursor-pointer hover:underline underline-offset-4">
                        Pricing
                    </div>
                    <div className="px-2 cursor-pointer hover:underline underline-offset-4">
                        About
                    </div>
                    <div className="px-2 cursor-pointer hover:underline underline-offset-4">
                        Contact
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-8 py-4  w-[50vw] h-[94vh]">
                <h1 className="text-6xl font-extrabold  mt-52 ">
                    Seamless Payments for Your 
                    Business.
                </h1>
                <div className="text-2xl font-extralight mt-4 ">
                 Accept payments from your customers with ease. Our user-
                 <br />
                 friendly app supports a wide range of payment methods, so 
                 <br />
                 you can focus on growing your business.
                </div>
                <div className="font-roboto py-4">
                    <Button2 className="py-4 px-6 text-4xl" label={'Get started'}></Button2>
                </div>
            </div>
            <div className=" flex flex-col h-[90vh] bg-slate-200">
                <div className="w-[90vw] flex flex-col justify-center items-center mt-44 px-10">
                    <div className="text-md mb-4">
                            Key Features
                    </div>
                    <div className="font-extrabold text-6xl">
                        Streamline Your Payments.
                    </div>
                    <div className='text-2xl justify-center items-center font-thin mb-20'>
                        Our payments app offers a range of features to help you manage your business finances with <br /> ease, including real-time transaction tracking, automated invoicing, and secure payment processing.
                    </div>
                </div>
                <div className="flex flex-col justify-center px-28 mb-4">
                    <div className="font-bold text-2xl px-10">
                     Secure Payments   
                    </div>
                    <div className="font-extralight text-xl px-10">
                    Accept payments securely with our advanced fraud detection and <br /> data encryption.
                    </div>
                </div>
                <div className="flex flex-col justify-center px-28 mb-4">
                    <div className="font-bold text-2xl px-10">
                    Automated Invoicing   
                    </div>
                    <div className="font-extralight text-xl px-10">
                    Generate and send professional invoices with just a few clicks.
                    </div>
                </div>
                <div className="flex flex-col justify-center px-28 mb-4">
                    <div className="font-bold text-2xl px-10">
                    Real-time Reporting   
                    </div>
                    <div className="font-extralight text-xl px-10">
                    Track your payments and revenue in real-time with our intuitive <br /> dashboard .
                    </div>
                </div>
            </div>
            <div className=" h-[30vh]">
                <div className="flex flex-col px-10 mt-24">
                    <div className="font-extrabold text-4xl">
                        Get Started with Our Payments App
                    </div>
                     <div className='text-2xl justify-center items-center font-thin mt-5'>
                        Sign up today and start accepting payments in minutes. 
                    </div>
                </div>
            </div>
            <div className="flex justify-between  h-[5vh] bg-slate-200">
                <div className="justify-center text-sm font-light px-4 mt-4">
                  © 2024 Payments App. All rights reserved.
                </div>
                <div className="px-4 mt-4 font-light text-sm flex">
                    <div className="hover-underline cursor-pointer underline-offset-4 px-2">
                        Privacy
                    </div>
                    <div className="hover-underline cursor-pointer underline-offset-4 px-2">
                        Security
                    </div>
                    <div className="hover-underline cursor-pointer underline-offset-4 px-2">
                        Support
                    </div>
                </div>
            </div>
        </div>
    ) 
}



