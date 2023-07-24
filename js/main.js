//===============  Variables del documento ================

//        + - / = . * C
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const btnDividir = document.getElementById("btnDividir");
const btnIgual = document.getElementById("btnIgual");
const btnPunto = document.getElementById("btnPunto");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnBorrar = document.getElementById("btnBorrar");

//          botones 0-9
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");

//           variables iniciales
const numero_ingresado = document.getElementById("numero_ingresado");
const historial = document.getElementById("historial");

let numero1 = null;
let numero2 = null;
let operador = null;

//           Funciones primarias

//función de suma
function sumar(numero1, numero2) {
    numero1 += numero2
    numero2 = 0;
}

function restar(numero1, numero2) {
    numero1 -= numero2
    numero2 = 0;
}

function asignar() {

    if (numero_ingresado.value === "") {
        numero1 = historial.innerText;
    };

    if (numero1 === null) {
        numero1 = numero_ingresado.value;
    } else {
        numero2 = numero_ingresado.value;
    }
    console.log(numero1, operador, numero2);
    if (numero1 !== null && numero2 !== null && operador !== null) {
        switch (operador) {
            case '+':
                numero1 = Number(numero1) + Number(numero2);
                break;
            case '-':
                numero1 = Number(numero1) - Number(numero2);
                break;
            case '*':
                numero1 = Number(numero1) * Number(numero2);
                break;
            case '/':
                numero1 = Number(numero1) / Number(numero2);
                break;
        }//switch
    }//if <> ""
    numero_ingresado.value = "";
}

function verifica(){
    if (numero1 == null && numero2 == null && operador == null) {
        historial.innerText="";
    };
};

//=====================  Botones  ==================================

//     = BORRAR =
btnBorrar.addEventListener("click", function (event) {
    event.preventDefault();
    numero_ingresado.value = "";
    historial.innerText = ""
    numero1 = null;
    numero2 = null;
    operador = null;
})

//     = + =
btnSumar.addEventListener("click", function (event) {
    event.preventDefault();
    if (numero_ingresado.value != "") {
        historial.innerText += `${numero_ingresado.value}+`;
    };
    operador = "+";
    asignar();
});

//     = - =
btnRestar.addEventListener("click", function (event) {
    event.preventDefault();
    if (numero_ingresado.value != "") {
        historial.innerText += `${numero_ingresado.value}-`;
    };
    operador = "-";
    asignar();
});

//     = * =
btnMultiplicar.addEventListener("click", function (event) {
    event.preventDefault();
    if (numero_ingresado.value != "") {
        historial.innerText += `${numero_ingresado.value}x`;
    };
    operador = "*";
    asignar();
});

//     = / =
btnDividir.addEventListener("click", function (event) {
    event.preventDefault();
    if (numero_ingresado.value != "") {
        historial.innerText += `${numero_ingresado.value}/`;
    };
    operador = "/";
    asignar();
});

//     = IGUAL =
btnIgual.addEventListener("click", function (event) {
    event.preventDefault();
    historial.innerText += `${numero_ingresado.value}`;
    asignar()
    historial.innerText = numero1;
    numero1 = null;
    numero2 = null;
    operador = null;
})


//======= Valores ========

//     = . =
btnPunto.addEventListener("click", function (event) {
    event.preventDefault();
    verifica();
    numero_ingresado.value += ".";
})

//     = 0 =
btn0.addEventListener("click", function (event) {
    event.preventDefault();
    verifica();
    numero_ingresado.value += "0";
})

//     = 1 =
btn1.addEventListener("click", function (event) {
    event.preventDefault();
    verifica();
    numero_ingresado.value += "1";

})

//     = 2 =
btn2.addEventListener("click", function (event) {
    event.preventDefault();
    verifica();
    numero_ingresado.value += "2";
});

//     = 3 =
btn3.addEventListener("click", function (event) {
    event.preventDefault();
    verifica();
    numero_ingresado.value += "3";
})

//     = 4 =
btn4.addEventListener("click", function (event) {
    event.preventDefault();
    verifica();
    numero_ingresado.value += "4";
});

//     = 5 =
btn5.addEventListener("click", function (event) {
    event.preventDefault();
    verifica();
    numero_ingresado.value += "5";
})

//     = 6 =
btn6.addEventListener("click", function (event) {
    event.preventDefault();
    verifica();
    numero_ingresado.value += "6";
});
//     = 7 =
btn7.addEventListener("click", function (event) {
    event.preventDefault();
    verifica();
    numero_ingresado.value += "7";
})

//     = 8 =
btn8.addEventListener("click", function (event) {
    event.preventDefault();
    verifica();
    numero_ingresado.value += "8";
});

//     = 9 =
btn9.addEventListener("click", function (event) {
    event.preventDefault();
    verifica();
    numero_ingresado.value += "9";
});

