function isObject(subject){
    return typeof subject == "object";
}
function isArray(subject){
   return Array.isArray(subject);
}
function deepCopy(subject){
    let copySubject;
    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);
    if (subjectIsArray) {
        copySubject = [];
    }else if (subjectIsObject) {
        copySubject = {};
    } else {
        return copySubject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key])
        console.log(keyIsObject);
        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }
    return copySubject;
}

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    aprovedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined
    }
}

const juan = deepCopy(studentBase);
// No deja eleiminar ninguna propiedad del objeto que se le pasa
Object.seal(juan);
juan.name =  "Juanito";
juan.email = "juanito@hotmail.com"
juan.age = 28;
juan.aprovedCourses.push("Curse de programacion basica");
juan.learningPaths.push("Curso Definitivo de HTML y CSS");
juan.learningPaths.push("Curso POO orientada a objetos");
juan.socialMedia.twitter = "Jorge12310";
juan.socialMedia.instagram = "JJorge2023";
juan.socialMedia.facebook = "Jose Jorge Martinez Suarez";
/* Object.defineProperty(juan,"name",{
    value: "Juanito",
    configurable: false
}); */