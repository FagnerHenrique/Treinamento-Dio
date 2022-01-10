function calculadora () {
    const operacao = prompt('Escolha uma operação:\n 1 - Soma[+]\n 2 - Subtração [-]\n 3 - Multiplicação [*]\n 4 - Divisão Real [/] \n 5 - Divisão Inteira [%]\n 6 - Potenciação [**]');
    console.log(operacao);

    let n1 = Number (prompt("Insira um número"));
    let n2 = Number (prompt("Insira um número"));
    let resultado;

    function soma () {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
    }

    function subtracao () {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
    }

    function multipicacao () {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
    }

    function divisaoReal () {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();

    }

    function divisaoInteira () {
        resultado = n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`)
        novaOperacao();
    }

    function potenciacao () {
        resultado = n1 ** n2;
        alert(`${n1} ** ${n2} = ${resultado}`)
        novaOperacao();
    }

    function novaOperacao () {
        let opcao = prompt("Deseja fazer mais uma operação?\n 1 - SIM\n 2 - NÃO ");

        if (opcao == 1) {
            calculadora();
        } else id (opcao == 2 ) {
            alert("Tchau")
        } else {
            alert ("Digite uma opção válida")
            novaOperacao();
        }
    }

if (operacao == 1) {
    soma();
} else if (operacao == 2) {
    subtracao();
} else if (operacao == 3) {
    multipicacao();
} else if (operacao == 4 ) {
    divisaoReal();
} else if (operacao == 5) {
    divisaoInteira();
} else if (operacao == 6) {
    potenciacao();
}
}


calculadora();