

export function AppBar({label})
{
    return (
        <div>
            <div className="flex shadow-md h-28 justify-between px-4">
                <div className="font-extrabold text-4xl flex flex-col justify-center h-full ml-4">
                    {label}
                </div>
                <div className="flex">
                    <div className="font-bold text-2xl flex flex-col justify-center h-full mr-2 ">
                        Hello
                    </div>
                <div className="flex justify-center h-12 w-12 bg-slate-200 rounded-full mt-8 mr-6">
                    <div className="font-bold text-2xl flex flex-col justify-center h-full">
                        A
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}