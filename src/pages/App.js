import { User } from "parse";

function App() {
    const user = User.current();
    if (user !== null) {
        return <p>Hello {user.getUsername()}</p>;
    } else {
        return <p>Hello World !</p>;
    }
}

export default App;
