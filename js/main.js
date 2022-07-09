alert('Bienvenido al portal de calificaciones escolares');


/* Metodo No.1 utilizando el IF
let nombre;
let nota1, nota2, nota3;
let promedio;

nombre = prompt('Ingrese el nombre del Alumno:');
nota1 = parseInt(prompt('Ingrese la nota uno:'));
nota2 = parseInt(prompt('Ingrese la nota dos:'));
nota3 = parseInt(prompt('Ingrese la nota tres:'));
promedio = (nota1+nota2+nota3)/3;
alert('El nombre del alumno es: \n'+nombre +'\n y su promedio es: \n'+promedio);
    if ((promedio >= 95) && (promedio <= 100)){
        alert('El promedio de '+nombre+' es sobre saliente');
    }else if ((promedio >= 90) && (promedio <= 94)){
        alert('El promedio de '+nombre+' es notable');
    }else if ((promedio >= 80) && (promedio <= 89)){
        alert('El promedio de '+nombre+' es normal');
    }else if ((promedio >= 70) && (promedio <=79)){
        alert('El alumno '+nombre+' requiere asesoría académica');
    }else if(promedio < 70){
        alert('El alumno '+nombre+' esta reprobado con un promedio: '+promedio);
    }
    else{
        alert('El alumno '+nombre+' No cae dentro del rango');
    }
*/

/* Método No.2 Utilizando el ciclo Switch utilizando las mismas variables
        switch (true){
            case promedio >= 95 && promedio <= 100:
                alert('El alumno '+nombre+' tiene un promedio sobresaliente');
                break;
            case promedio >= 90 && promedio <= 94:
                alert('El alumno '+nombre+' tiene un promedio notable');
                break;
            case promedio >= 93 && promedio <= 80:
                alert('El alumno '+nombre+' tiene un promedio normal');
                break;
            case promedio >= 70 && promedio <= 79:
                alert('El alumno '+nombre+' requiere asesoría académica');
                break;
            case promedio <70:
                alert('El alumno '+nombre+' está reprobado con un promedio de '+promedio+' tiene que cursar nuevamente el semestre');
                break;
            default:
                alert('El alumno no cae en ninguno de los 2 casos');
                break;
        }
*/

// Método No.3 Utilizando el ciclo FOR usando variables distintas
nombre = prompt('Ingrese el nombre del Alumno:');
let suma = 0;
let promedio = 0;
let num;

num = prompt('Ingrese el numero de notas que desea calcular',"");
    for(i=1; i<=num; i++){
        nota = prompt('Ingrese la nota '+i);
        nota = parseInt(nota);
        suma = suma+nota;
    }
    promedio=(suma)/num;
    i=i-1;
    alert(nombre +' tú promedio de las notas es: '+promedio+' Tomando en cuenta '+i+' notas');

    if ((promedio >= 95) && (promedio <= 100)){
        alert('El promedio de '+nombre+' es sobre saliente');
    }else if ((promedio >= 90) && (promedio <= 94)){
        alert('El promedio de '+nombre+' es notable');
    }else if ((promedio >= 80) && (promedio <= 89)){
        alert('El promedio de '+nombre+' es normal');
    }else if ((promedio >= 70) && (promedio <=79)){
        alert('El alumno '+nombre+' requiere asesoría académica');
    }else if(promedio < 70){
        alert('El alumno '+nombre+' esta reprobado con un promedio: '+promedio+', tiene que cursar nuevamente el semestre');
    }
    else{
        alert('El alumno '+nombre+' No cae dentro del rango');
    }




    
