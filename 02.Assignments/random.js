function getRandomIp() {
    let nib1 = Math.floor(Math.random() * 255).toString();
    let nib2 = Math.floor(Math.random() * 255).toString();
    let nib3 = Math.floor(Math.random() * 255).toString();
    let nib4 = Math.floor(Math.random() * 255).toString();

    let ip = nib1 + "." + nib2 + "." + nib3 + "." + nib4;

    return ip;
}

console.log(getRandomIp());

function getRandomMacAddress() {
    let str = "0123456789abcdef";
    let s = Math.floor(Math.random() * 16777215).toString(16);

    let mac = `${s.substr(2, 2)}:${s.substr(2, 2)}:${s.substr(2, 2)}:${s.substr(2, 2)}:${s.substr(2, 2)}:${s.substr(2, 2)}`;
    return mac;
}

console.log(getRandomMacAddress());
