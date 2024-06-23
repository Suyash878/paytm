
export function Input({label,placeholder,onChange})
{
    return (
        <div className="mt-6 px-4 text-1xl font-medium">
            <div className=" font-roboto text-lg font-bold"> 
                {label}
            </div>
            <div className="mt-2 ">
                <input onChange = {onChange}className ='h-10 p-4 w-112 rounded-md text-slate-400' placeholder={placeholder}/>
            </div>
        </div>
    )
}
