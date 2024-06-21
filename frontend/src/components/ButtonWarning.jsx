import { Link } from "react-router-dom"

export function ButtonWarning({label,Buttontext,to})
{
    return (
        <div className="justify-center text-md flex mb-2">
            <div>{label}</div>
            <Link className="pointer underline pl-1 cursor-pointer" to={to}>
            {Buttontext}
            </Link>
        </div>
    )
}