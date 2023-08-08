const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));

/* Define las propiedades de un objeto prototipo */
/* Con Object.keys() --> Enumerable no aparece, writable si aparece, Configurable si aparece */
Object.defineProperty(juan,"navigator",{
    value: "Chrome",
    enumerable: false,
    writable: true,
    configurable: true
});

Object.defineProperty(juan,"pruebaNasa",{
    value: "extraterrestres",
    enumerable: false,
    writable: false,
    configurable: false
});

Object.defineProperty(juan,"editor",{
    value: "extraterrestres",
    enumerable: true,
    writable: false,
    configurable: true
});


Object.defineProperty(juan,"terminal",{
    value: "WSL",
    enumerable: true,
    writable: true,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptors(juan));
