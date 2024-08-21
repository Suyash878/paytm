import { useNavigate } from "react-router-dom"

export function Button2({label})
{   
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup');
    };

    return (
    <button onClick = {handleClick}className="bg-blue-500 text-white font-roboto py-2 px-4 rounded hover:bg-blue-600">
        {label}
    </button>
    )
}