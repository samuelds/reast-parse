import { useState } from "react";
import { User } from "parse";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        User.logIn(username, password)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username :
                <input
                    type="text"
                    name="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Password :
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );
}

export default Login;
