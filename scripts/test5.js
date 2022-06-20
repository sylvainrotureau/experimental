
let input = prompt("Entrez une phrase à traduire");
let vowels = ["a","e","i","o","u","y"];
let resultArray = "";

let inputArray = input.split('');

for (let v =0; v < inputArray.length ; v++){
    for (let y=0; y < vowels.length; y++){
        if (inputArray[v] === vowels[y]){
            resultArray = resultArray.concat(vowels[y]);
        }
    }
}

document.getElementById("toTranslate").innerHTML = input;

document.getElementById("doneTranslate").innerHTML = resultArray;

