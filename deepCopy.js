const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    },
    editA(){
        this.a = "AAAAAA";
    }
};

function isObject(subject){
return typeof subject == "object";
}
function isArray(subject){
return Array.isArray(subject);
}
/* function deepCopy(subject){
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
} */

function deepFreeze(subject) {
    Object.keys(subject).forEach(prop => {
        if(typeof subject[prop] === 'object') deepFreeze(subject[prop]);
    });
    return Object.freeze(subject);
  }
