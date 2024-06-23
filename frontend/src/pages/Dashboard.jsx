import { AppBar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard()
{
    return (
        <div>
            <AppBar label={"Payments App"} Avatar={"Hello"}></AppBar>
            <Balance></Balance>
            <Users></Users>
        </div>
    )

}