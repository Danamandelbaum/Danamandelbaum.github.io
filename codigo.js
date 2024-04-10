const notaM = document.getElementById("notaMatematica");
const notaL = document.getElementById("notaLengua");
const notaE = document.getElementById("notaEFSI");
const botonPromedio = document.getElementById("calcularPromedio");
const botonMayorNota = document.getElementById("calcularMayorNota");
const resultadoS = document.getElementById("resultados");

let promedio = 0;
const cant = 3;
botonPromedio.onclick = () =>
{
    if ((notaM.value) == "" || (notaL.value) == "" || (notaE.value) == "")
    {
        alert("Debes completar todos los campos");
    }
    else{
    let promedio = (parseInt(notaM.value) + parseInt(notaL.value) + parseInt(notaE.value)) / cant;
    if (promedio >= 6){
        const mensaje = "El promedio es: " + promedio;
        resultadoS.innerText = mensaje;
        resultadoS.style.color = "green";
    }
    else{
        const mensaje = "El promedio es: " + promedio;
        resultadoS.innerText = mensaje;
        resultadoS.style.color = "red";
    }
    }
}
botonMayorNota.onclick = () =>
{
    if ((notaM.value) == "" || (notaL.value) == "" || (notaE.value) == "")
    {
        alert("Debes completar todos los campos");
    }
    else{
        let notaMA = parseInt(notaM.value);
        let notaLE = parseInt(notaL.value);
        let notaEF = parseInt(notaE.value);
        let mensaje = "La/s mayor/es nota/s es/son: ";
        let mayorNota = Math.max(notaMA, notaLE, notaEF);
        

        if (notaMA === mayorNota)
        {
            mensaje += "Matematica"
        }
        if (notaLE === mayorNota)
        {
            mensaje += " Lengua"
        }
        if (notaEF === mayorNota)
        {
            mensaje += " EFSI"
        }
        resultadoS.innerText = mensaje;
        resultadoS.style.color = "blue";
    }
    
}

verificarRango = (evento) =>
{
    if (evento.target.value >= 0 && evento.target.value <= 10) {
        evento.target.style.borderColor = "green";
        evento.target.style.borderWidth = "thick";
    } else {
        evento.target.style.borderColor = "red";
        evento.target.style.borderWidth = "thick";

    }
}
