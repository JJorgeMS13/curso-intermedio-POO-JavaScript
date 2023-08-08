const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    }
};

const obj2 = {};
/* Forma Shallow solo funciona con un objeto cuando tenemos un objeto dentro de otro esto falla */
for (prop in obj1) {
    obj2[prop] = obj1[prop];
}

const obj3 = Object.assign({}, obj1);

const obj4 = Object.create(obj1);
