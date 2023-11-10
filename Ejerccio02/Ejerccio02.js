'use strict'
let Promedio = Number(prompt("Promedio del estudiante"));
let Ingresos = Number(prompt("Ingresos mensuales familiares"));

if (Promedio>=8.5 && Ingresos>=600) {
    alert("Aprovado")
}else{
    alert("Desaprovado")
}

