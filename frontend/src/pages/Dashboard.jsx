import { AppBar } from "../components/Appbar";
import { Balance } from "../components/Balance";

export function Dashboard()
{
    return (
        <div>
            <AppBar label={"Payments App"} Avatar={"Hello"}></AppBar>
            <Balance></Balance>
        </div>
    )

}