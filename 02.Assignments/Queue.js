/* -------------------  Queue data structure ------------------- */

// Using Constructor Function and prototyping

function Queue() {
    this.elements = [];
}

Queue.prototype.enqueque = function (e) {
    this.elements.push(e);
};

Queue.prototype.dequeque = function () {
    return this.elements.shift();
};

Queue.prototype.isEmpty = function () {
    return this.elements.length == 0;
};

Queue.prototype.peak = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
};

Queue.prototype.length = function () {
    return this.elements.length;
};

let q = new Queue();

for (let i = 1; i <= 7; i++) {
    q.enqueque(i);
}

console.log("peak", q.peak());

console.log("length", q.length());

while (!q.isEmpty()) {
    console.log("dequeque", q.dequeque());
}


