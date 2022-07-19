import { User } from "parse";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    const onClick = () => {
        User.logOut().then(() => {
            navigate("/");
        });
    };

    return <button onClick={onClick}>Se déconnecter</button>;
}

export default Logout;
