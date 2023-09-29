let degree = document.getElementById("degrees");
let type = document.getElementById("tempType");
let result = document.getElementById("ans");
let output = 0;

function converter(){
console.log(degree.value)
if(type.value ==="fahrenheit"){
    output = (degree.value * (9/5)) + 32
    result.innerHTML = output
}
else{
    output = (degree.value - 32)*(5/9)
    result.innerHTML = output

}
}