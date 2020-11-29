var officers = [
    { id: 20, name: "Captain Piett" },
    { id: 24, name: "General Veers" },
    { id: 56, name: "Admiral Ozzel" },
    { id: 88, name: "Commander Jerjerrod" },
];

var officersIds = [];

officers.forEach((officer) => officersIds.push(officer.id));

console.log("using ForEach:--->", officersIds);

officersIds = officers.map((officer) => officer.id);

console.log("using map:--->", officersIds);

var john = { name: "John Doe" },
    lily = { name: "Lily Bush" },
    peter = { name: "Peter Drucker" };

var userRoles = new Map();

console.log(typeof userRoles);

console.log(userRoles instanceof Map);

userRoles.set(john, "admin");

userRoles.set(lily, "editor").set(peter, "subscriber");

console.log(userRoles);
console.log(userRoles.get(john));

for (let role of userRoles.values()) {
    console.log(role);
}

for (let elem of userRoles.entries()) {
    console.log(`${elem[0].name}: ${elem[1]}`);
}

for (let [user, role] of userRoles.entries()) {
    console.log(`${user.name}: ${role}`);
}

var keys = [...userRoles.keys()];
console.log(keys);

var roles = [...userRoles.values()];
console.log(roles);

userRoles.has(lily); // true

userRoles.delete(john);

userRoles.clear();
