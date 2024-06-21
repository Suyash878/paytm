
export function Balance({value})
{
    return (
        <div>
            <div className="text-2xl flex mt-4">
                <div className="justify-center px-6 py-4 font-bold">
                    Your balance is {value}
                </div>
            </div>
        </div>
    )
}
