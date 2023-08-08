const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    }
}
/* El problema con este sistema es que cuando tenemos uns funcion dentro de un obj no lo toma en cuenta */
/* Convierte objetos a strings */
const stringifiedComplexObj = JSON.stringify(obj1);
/* Convierte un string a un objeto */
const obj2 = JSON.parse(stringifiedComplexObj);