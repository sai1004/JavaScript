// ES-5
// constructor function
function User(name, email, mobile, password) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.password = password;
}

var user1 = new User("john", "john@example.com", +918888888888, "secret");

console.log(user1);
