import { useState } from "react";
import { User } from "parse";
import { useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("ROLE_USER");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = new User();
        user.set("username", username);
        user.set("password", password);
        user.set("email", email);
        user.set("status", status);
        user.signUp()
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
            <label>
                Email :
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );
}

export default Register;
