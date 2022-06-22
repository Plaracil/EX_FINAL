const $COMANDA = document.getElementById('comanda');
const $COMPLEMENTOS = document.getElementById('complementos');
const $RESULTADO = document.getElementById('resultado');
const $PIZZA = document.getElementById('pizza');
const $bono = document.getElementById('bono');
const impuesto = document.getElementById('impuesto');
const precio = document.getElementById('precio');

bono = window.prompt("Tiene algún bono ?");
impuesto;


function calcular() {

if (pizza == 9) {
    if (complementos = 1) {
        precio *= complementos + pizza;
    }
    else {
        if (bono = 10) {
            precio *= pizza + complementos / 100;
        }
    }
}

else {
    if (impuesto = 10) {
        precio *= pizza + complementos * 0.10;
    }
    else {
        if (impuesto = 21) {
            precio *= pizza + complementos * 0.21;
        }
    }
}

imprimeResultado(aumento);
}


function imprimeResultado ( aumento ) {
$RESULTADO.innerHTML = "El sueldo es " + aumento + "€";
}
