let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let promedio = 0;
 
function notaPromedio() {
    let alumno = prompt("Ingrese el nombre del alumno:");
    let nota1 = parseInt(prompt("Ingrese la calificación de Lengua de" + " " + alumno));
    if (nota1 >=11) {
        nota1 = parseInt(prompt("Error: Ingrese calificación válida"));
    }
    else alert("La nota ingresada es " + nota1);
    let nota2 = parseInt(prompt("Ingrese la calificación de Matemáticas de" + " " + alumno));
    if (nota2 >=11) {
        nota2 = parseInt(prompt("Error: Ingrese calificación válida"));
    }
    else alert("La nota ingresada es " + nota1);
    let nota3 = parseInt(prompt("Ingrese la calificación de Quimica de" + " " + alumno));
    if (nota3 >=11) {
        nota3 = parseInt(prompt("Error: Ingrese calificación válida"));
    }
    else alert("La calificación ingresada es " + nota3);
    parseInt(promedio = (nota1 + nota2 + nota3)/3);
    alert("El promedio de " + alumno + " es " + promedio)
}

notaPromedio()