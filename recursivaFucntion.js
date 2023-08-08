const numeritos = [0,1,2,3,4,5,5,5,6,7,8,9,1,5,6,7];
function recursiva(numbersArray){
    if (numbersArray.length != 0) {
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        recursiva(numbersArray);
    }
}


/*

let numerito = 0;
for (let index = 0; index < numeritos.length; index++) {
    numerito = numeritos[index];
    console.log(index, numerito);
} */