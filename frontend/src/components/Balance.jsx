import { useSearchParams } from "react-router-dom"

export function Balance({value})
{   
    // need to use search params on this when the user signs-up
    const [SearchParams] = useSearchParams();
    const token = SearchParams.get("token");

    const balance = async function fetchBalance()
    {
        const amount = await axios.get(`http://localhost:3000/api/v1/account/balance`, 
            {
                headers: 
                {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return amount;
    }

    return (
        <div>
            <div className="text-2xl flex mt-4">
                <div className="justify-center px-6 py-4 font-bold">
                    Your balance is $ {balance}
                </div>
            </div>
        </div>
    )
}
