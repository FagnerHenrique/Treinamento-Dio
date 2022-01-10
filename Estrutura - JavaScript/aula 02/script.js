//tipos variáveis

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var NumeroQualquer = 1;
console.log (typeof(NumeroQualquer));

//string
var nome = "diana";
console.log(typeof(nome));

//function
var funcao = function() {}
console.log(typeof(funcao));

//como declarar
var variavel = "Fagner";
console.log(variavel);

let variavel2 = "Fagner";
variavel2= "teste";
console.log(variavel2);

const constante = "Fagner"
console.log (constante);

var escopoglobal = "global";
console.log(escopoglobal);

function escopolocal () {
    let escopoLocalInterno = "Local";
    console.log(escopoLocalInterno);
}

escopolocal()