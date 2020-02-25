let user = {
    name: 'John',
    go: function () {alert(this.name)}
};
(user.go)()

function makeUser() {
    return {
        name: 'John',
        ref: this
    };
};
let user = makeUser();

alert(user.ref.name);
