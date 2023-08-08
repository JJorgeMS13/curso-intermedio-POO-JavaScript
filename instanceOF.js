function requiredParam(props){
    throw new Error(props + " is requered");
}
function isArray(subject){
    return Array.isArray(subject);
 }
function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    this.name  = name;
    this.courses = courses;
} 
function Student({
    name = requiredParam("name"),
    email= requiredParam("email"),
    age,
    twiter,
    instagram,
    facebook,
    approvedCurses = [],
    learningPaths = []
} = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCurses = approvedCurses;
    this.socialMedia = {
         twiter,
         instagram,
         facebook
    };
    const private = {
        "_learningPaths": [],
    }
    // "this" referencia al prototipo "Student"
    Object.defineProperty(this, "learningPaths",{
        get() {
            return private["_learningPaths"];
        },
        set(newLP) {
            if (newLP instanceof LearningPath) {
                private["_learningPaths"].push(newLP);
            } else {
                console.warn("Alguno de los LPs que quieres añadir NO es una instancia del prototipo LearningPath");
            }
        }
    });

    for (learningPath of learningPaths) {
    // Al querer hacer una asignación, estamos invocando al setter de la
    // propiedad "learningPaths". Entonces, la ruta de aprendizaje ubicado
    // en el índice actual será validado por el setter para saber si es o no
    // instancia del prototipo LearningPath:
           this.learningPaths = learningPath;
    }

}

const escuelaWeb = new LearningPath({ name: "Escuela de webDev"});
const juan = new Student({
    email: "juanito@frijoles.com", 
    name: "Juanito",
    learningPaths: [
        escuelaWeb,
        { name: "Impostor", courses: []}
    ]
});