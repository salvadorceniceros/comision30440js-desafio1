alert('Bienvenido al portal de calificaciones escolares');

nombre = prompt('Ingrese el nombre del Alumno:');
let suma = 0;
let promedio = 0;
let num;

function estatusAlumno(prom){
    if ((prom >= 95) && (prom <= 100)){
        return 'El promedio de '+nombre+' es sobre saliente';
    }else if ((prom >= 90) && (prom <= 94)){
        return 'El promedio de '+nombre+' es notable';
    }else if ((prom >= 80) && (prom <= 89)){
        return 'El promedio de '+nombre+' es normal';
    }else if ((prom >= 70) && (prom <=79)){
        return 'El alumno '+nombre+' requiere asesoría académica';
    }else if(prom < 70){
        return 'El alumno '+nombre+' esta reprobado con un promedio: '+prom+', tiene que cursar nuevamente el semestre';
    }
    else{
        return 'El alumno '+nombre+' No cae dentro del rango';
    }
}

num = prompt('Ingrese el numero de notas que desea calcular',"");
    for(i=1; i<=num; i++){
        nota = prompt('Ingrese la nota '+i);
        nota = parseInt(nota);
        suma = suma+nota;
    }
    promedio=(suma)/num;
    i=i-1;
    alert(nombre +' tú promedio de las notas es: '+promedio+' Tomando en cuenta '+i+' notas');
    alert(estatusAlumno(promedio));