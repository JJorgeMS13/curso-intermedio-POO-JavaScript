function requiredParam(props){
    throw new Error(props + " is requered");
}
function isArray(subject){
    return Array.isArray(subject);
 }
function createLearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    const private = {
        "_name": name,
        "_courses": courses
    };
    const public = {
        get name(){
            return private["_name"]
        },
        set name(newName){
            if (newName.length != 0) {
                private["_name"] = newName;
            } else {
                console.warn("Tu nombre debe tener al menos 1 caracter");
            }
        },
        get courses(){
            return private["_courses"]
        },
    };
    return public;
}
function createStudent({
    name = requiredParam("name"),
    email= requiredParam("email"),
    age,
    approvedCurses = [],
    learningPaths = [],
    twiter,
    instagram,
    facebook
} = {}) {
    const private = {
        "_name": name,
        "_learningPaths": learningPaths
    };
    const public = {
        email,
        age,
        socialMedia: {
            twiter,
            instagram,
            facebook
        },
        approvedCurses,
        get name(){
            return private["_name"];
        },
        set name(newName){
            if (newName.length !== 0) {
                private._name = newName;
            }else {
                console.warn("El nombre de contener almenos un carácter.");
            }
        },
        get learningPaths(){
            return private["_learningPaths"];
        },
        set learningPaths(newValue){
            if (!newValue.name) {
                console.warn("Tu LP no tiene la propiedad name.");
                return;
            }
            if (!newValue.courses) {
                console.warn("Tu LP no tiene la propiedad cursos.");
                return;
            }
            if (!isArray(newValue.courses)) {
                console.warn("Tu Lp no tienes una lista (*de Cursos)");
                return;
            }
            private["_learningPaths"].push(newValue);
        }
        /* changeName(newName){
            private._name = newName;
        },
        readName(){
            return private["_name"];
        } */
    };
    /* No deja eliminar ni modificar las funciones */
    /* Object.defineProperty(public, "readName",{
        configurable: false,
        writable: false
    });
    Object.defineProperty(public, "changeName",{
        configurable: false,
        writable: false
    }); */
    return public;
}
const juan = createStudent({
    name: "Juanito",
    email: "juanito@frijolito.com"
});
console.log(Object.getOwnPropertyDescriptors(juan));
