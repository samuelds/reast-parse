import { useState } from "react";
import { User } from "parse";

import Message from "../models/Message";

function Chat() {
    const [text, setText] = useState("");

    const onSubmit = () => {
        const message = new Message(text, User.current(), new Date());
        message.save();
        console.log("message saved !");
    };

    return (
        <form onSubmit={onSubmit}>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button>Envoyer</button>
        </form>
    );
}

export default Chat;
