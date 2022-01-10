//como declarar array

//let array = ['string', 1, true];
//console.log(array);

let array = ["string", 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];
console.log(array[5]);

array.forEach(function(item, index){console.log(item, index)});

array.push ("novo item");
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift();
console.log("novo item no inicio");

console.log(array.indexOf(true));