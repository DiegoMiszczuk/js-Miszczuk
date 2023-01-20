
let alumnos = [];


const creaAlumno = (nombre, dni) => {
  return alumnos.push(new Alumno(nombre, dni))

}

class Materia {
  constructor(nombreMateria) {
    this.nombre = nombreMateria;
  }
  nota1 = 0;
  nota2 = 0;
  nota3 = 0;
  promedio() {
    return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
  }
}
const _materias = [];

_materias.push(new Materia("Matematicas"));
_materias.push(new Materia("Lengua"));
_materias.push(new Materia("Historia"));


class Alumno {
  constructor(nombre, dni) {
    this.nombre = nombre;
    this.dni = dni;
  }
  materias = [new Materia("matematica"), new Materia("lengua"), new Materia("historia")]
}

// const CargarNotas = (dni) => {
//   for (let index = 0; index < alumnos.length; index++) {
//     if (dni === alumnos[index].dni) {
//       for (let i = 0; i < alumnos[index].materias.length; i++) {
//         alumnos[index].materias[i].nota1 = Number.parseInt(prompt("Ingrese la nota 1 de " + alumnos[index].nombre + " en " + alumnos[index].materias[i].nombre))
//         alumnos[index].materias[i].nota2 = Number.parseInt(prompt("Ingrese la nota 2 de " + alumnos[index].nombre + " en " + alumnos[index].materias[i].nombre))
//         alumnos[index].materias[i].nota3 = Number.parseInt(prompt("Ingrese la nota 3 de " + alumnos[index].nombre + " en " + alumnos[index].materias[i].nombre))
//       }
//     }
//   }
// }


const busquedaDni = (dni) => {

  if (alumnos.find((el) => el.dni === dni)) {
    for (let index = 0; index < alumnos.length; index++) {
      if (dni === alumnos[index].dni) {
        alert("El Dni Nro: " + alumnos[index].dni + " Esta registrado al Alumno: " + alumnos[index].nombre)
      }
    }
  } else {
    alert(" No se encuentra el Dni consultado.")
  }
}


const listadoAlumnos = () => {
  const nombres = alumnos.map((el) => el.nombre)
  alert("listado de alumnos registrados: " + "\n" + nombres.join(", \n"))
};




const verPromedios = (dni) => {
  for (let index = 0; index < alumnos.length; index++) {
    if (dni === alumnos[index].dni) {
      for (let i = 0; i < alumnos[index].materias.length; i++) {
        alert("Alumno: " + alumnos[index].nombre + "\n" + "Calificacion final de " + _materias[i].nombre + ": "
          + alumnos[index].materias[i].promedio(
            alumnos[index].materias[i].nota1,
            alumnos[index].materias[i].nota2,
            alumnos[index].materias[i].nota3))
      }
    }
  }
}

// menuPrincipal();

// function menuPrincipal() {
//   let opcion = 0;
//   let menu =
//     "Bienvenido al Sistema de calificaciones\n Ingrese: \n 1 - Crear Alumno\n 2 - Calificar alumno\n 3 - Ver Promedios\n 4 - Buscar alumno por DNI\n 5 - Listado de Alumnos\n 0 - para salir";
//   opcion = Number(prompt(menu));

//   switch (opcion) {
//     case 0:
//       alert("Gracias por utilizar el sistema de calificaciones, Hasta pronto!")
//       break;
//     case 1:
//       creaAlumno((prompt("ingrese nombre")).toLowerCase(), Number.parseInt(prompt("ingrese dni")));
//       alert("Alumno creado con exito")
//       menuPrincipal();

//       break;
//     case 2:
//       CargarNotas(Number.parseInt(prompt("Ingrese el DNI")))
//       menuPrincipal();
//       break;
//     case 3:
//       verPromedios(Number.parseInt(prompt("Ingrese el DNI")))
//       menuPrincipal()
//       break;
//     case 4:
//       busquedaDni(Number.parseInt(prompt("Ingrese el DNI")))
//       menuPrincipal()
//       break;
//     case 5:
//       listadoAlumnos()
//       menuPrincipal()
//       break;

//     default:
//       alert("Opcion incorrecta! ")
//       menuPrincipal();
//   }
// }


// let nombre = document.getElementById("nombre")
// nombre.addEventListener("input" ,()=>{
//  console.log(nombre.innerHTML)
// })

/******************/
/****nuevo alumno */
function nuevoAlumno() {
  
  alumnos.push(new Alumno(document.getElementById("nombre").value, document.getElementById("dni").value))
  alumnoNuevo.reset()
  verMensaje()
  const alumnosJson =JSON.stringify(alumnos)
  localStorage.setItem("alumnos", alumnosJson)
  
  console.log(alumnos)
  
}

function verMensaje() {
  let guardarAlumno = document.getElementById("guardarAlumno")
  mensaje.classList.add("d-block")
  
}

function limpiar() {
  mensaje.classList.remove("d-block")
}

/*******************/
/*fin nuevo alumno */
/*******************/

/*******************/
/*calificar alumno */
/*******************/


console.log("dni")

const CargarNotas = (dni) => {
 document.getElementById("ingDni").value = dni
  for (let index = 0; index < alumnos.length; index++) {
    if (dni === alumnos[index].dni) {
        console.log(alumnos[index].dni)
      for (let i = 0; i < alumnos[index].materias.length; i++) {
         document.getElementById("nota1").value = alumnos[index].materias[i].nota1
         document.getElementById("nota2").value = alumnos[index].materias[i].nota2 
         document.getElementById("nota3").value = alumnos[index].matematicas[i].nota3 
        console.log()
        console.log(alumnos)
      }
    }
  }
}