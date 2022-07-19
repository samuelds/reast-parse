import Parse from "parse";

//on peut faire hériter de Parse.Object n'importe quelle classe
class Message extends Parse.Object {
    constructor(text = null, user, date) {
        super("Message"); //appel du constructor d'Object avec comme argument le nom de la Class
        this._text = text;
        this._user = user;
        this._date = date;
    }

    save() {
        this.set("text", this._text);
        this.set("username", this._user);
        this.set("date", this._date.toString());
        super.save();

        console.log("message saved !");
    }
}

export default Message;
