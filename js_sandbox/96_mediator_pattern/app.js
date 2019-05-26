const User = function (name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to)
    },
    receive: function (message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function () {
    let users = {}; // list of users

    return {
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function (message, from, to) {
            if (to) {
                // Single user message
                to.receive(message, from);
            } else {
                // Mass message
                for (const key in users) {
                    if (users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const maks = new User('Maks');
const yena = new User('Yena');
const evreychik = new User('Evreychik');

const chatroom = new Chatroom();

chatroom.register(maks);
chatroom.register(yena);
chatroom.register(evreychik);

maks.send('Hello Yena', yena);
yena.send('Gav Gav');