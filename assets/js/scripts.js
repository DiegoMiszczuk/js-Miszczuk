let alumnos = [];

const creaAlumno = (nombre, dni) => {
  return alumnos.push(new Alumno(nombre, dni));
};

/*--------------------------------------------------------------
# Crear Materias
--------------------------------------------------------------*/

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

/*--------------------------------------------------------------
# fin Crear Materias
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Crear Alumno
--------------------------------------------------------------*/

class Alumno {
  constructor(nombre, dni) {
    this.nombre = nombre;
    // this.apellido = apellido;
    this.dni = dni;
    // this.nacionalidad = nacionalidad;
    // this.direccion = direccion;
    // this.telefono = telefono;
  }
  materias = [
    new Materia("matematica"),
    new Materia("lengua"),
    new Materia("historia"),
  ];
}

/*--------------------------------------------------------------
# Fin Crear Alumno
--------------------------------------------------------------*/

// function a() {
//   alert(dniIngresado.value)
//   console.dir(dniIngresado)
// }

// let materia = document.getElementById("matEle")
// alert(materia.value)

// function a() {
//   console.dir(dniIngresado.value)
// }

// console.log(dni)

/*--------------------------------------------------------------
# Calificar Alumno
--------------------------------------------------------------*/

const cargarNotas = () => {
  let opcionMateria = document.getElementById("matEle");
  materiaElegida = opcionMateria.value;
  console.dir(materiaElegida);

  let dniIngresado = document.getElementById("ingDni");
  let dni = dniIngresado.value;
  for (let index = 0; index < alumnos.length; index++) {
    if (dni === alumnos[index].dni) {
      let calificacion1 = document.getElementById("nota1");
      let notaInst1 = calificacion1.value;
      let calificacion2 = document.getElementById("nota2");
      let notaInst2 = calificacion2.value;
      let calificacion3 = document.getElementById("nota3");
      let notaInst3 = calificacion3.value;

      alumnos[index].materias[materiaElegida].nota1 = notaInst1;
      alumnos[index].materias[materiaElegida].nota2 = notaInst2;
      alumnos[index].materias[materiaElegida].nota3 = notaInst3;
      console.log(alumnos);
      let reset = document.getElementById("calificar");
      calificar.reset();
    }
  }
};

/*--------------------------------------------------------------
# Fin calificar alumno
--------------------------------------------------------------*/

// const cargarNotas = (dni) => {
//   for (let index = 0; index < alumnos.length; index++) {
//     if (dni === alumnos[index].dni) {
//       alert("hola")
//       // for (let i = 0; i < alumnos[index].materias.length; i++) {
//       //   alumnos[index].materias[i].nota1 = Number.parseInt(prompt("Ingrese la nota 1 de " + alumnos[index].nombre + " en " + alumnos[index].materias[i].nombre))
//       //   alumnos[index].materias[i].nota2 = Number.parseInt(prompt("Ingrese la nota 2 de " + alumnos[index].nombre + " en " + alumnos[index].materias[i].nombre))
//       //   alumnos[index].materias[i].nota3 = Number.parseInt(prompt("Ingrese la nota 3 de " + alumnos[index].nombre + " en " + alumnos[index].materias[i].nombre))
//       // }
//     }
//   }
// }

//  dniIngresado.addEventListener("change", cargarNotas)

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

// const busquedaDni = (dni) => {

//   if (alumnos.find((el) => el.dni === dni)) {
//     for (let index = 0; index < alumnos.length; index++) {
//       if (dni === alumnos[index].dni) {
//         alert("El Dni Nro: " + alumnos[index].dni + " Esta registrado al Alumno: " + alumnos[index].nombre)
//       }
//     }
//   } else {
//     alert(" No se encuentra el Dni consultado.")
//   }
// }

// const listadoAlumnos = () => {
//   const nombres = alumnos.map((el) => el.nombre)
//   alert("listado de alumnos registrados: " + "\n" + nombres.join(", \n"))
// };

/*--------------------------------------------------------------
# Ver promedios
--------------------------------------------------------------*/
// let dniPromedio = document.getElementById("dniPromedio")
//  let dni = dniPromedio.value

// const verPromedios = (dni) => {
//   for (let index = 0; index < alumnos.length; index++) {
//     if (dni === alumnos[index].dni) {
//       alert("hola")
//       for (let i = 0; i < alumnos[index].materias.length; i++) {
//         alert("Alumno: " + alumnos[index].nombre + "\n" + "Calificacion final de " + _materias[i].nombre + ": "
//           + alumnos[index].materias[i].promedio(
//             alumnos[index].materias[i].nota1,
//             alumnos[index].materias[i].nota2,
//             alumnos[index].materias[i].nota3))
//       }
//     }
//   }
// }

/*--------------------------------------------------------------
# Ver promedios
--------------------------------------------------------------*/
const verNotasPromedio = () => {
  let opcionMateriaPromedio = document.getElementById("matElePromedio");
  materiaElegidaPromedio = opcionMateriaPromedio.value;
  console.dir(materiaElegidaPromedio);

  let dniIngresadoPromedio = document.getElementById("dniPromedio");
  let dni = dniIngresadoPromedio.value;
  for (let index = 0; index < alumnos.length; index++) {
    if (dni === alumnos[index].dni) {
      for (let i = 0; i < alumnos[index].materias.length; i++) {
        console.log(alumnos[index].materias[i]);
        console.log(alumnos[index].materias[i].nota1);
        console.log(alumnos[index].materias[i].nota2);
        console.log(alumnos[index].materias[i].nota3);
        alert(
          +alumnos[index].materias[i].promedio(
            alumnos[index].materias[i].nota1,
            alumnos[index].materias[i].nota2,
            alumnos[index].materias[i].nota3
          )
        );
      }

      // let calificacion1 = document.getElementById("nota1")
      // let notaInst1 = calificacion1.value
      // let calificacion2 = document.getElementById("nota2")
      // let notaInst2 = calificacion2.value
      // let calificacion3 = document.getElementById("nota3")
      // let notaInst3 = calificacion3.value
      // alert(alumnos[index].materias[materiaElegidaPromedio].nota1)
      // alert(alumnos[index].materias[materiaElegidaPromedio].promedio(alumnos[index].materias[materiaElegidaPromedio].nota1,alumnos[index].materias[materiaElegidaPromedio].nota2,alumnos[index].materias[materiaElegidaPromedio].nota3))

      // alumnos[index].materias[materiaElegida].nota1 = notaInst1
      // alumnos[index].materias[materiaElegida].nota2 = notaInst2
      // alumnos[index].materias[materiaElegida].nota3 = notaInst3
      // console.log(alumnos)
    }
  }
};

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

/*--------------------------------------------------------------
# Nuevo Alumno
--------------------------------------------------------------*/
function nuevoAlumno() {
  alumnos.push(
    new Alumno(
      document.getElementById("nombre").value,
      document.getElementById("dni").value
    )
  );
  alumnoNuevo.reset();
  verMensaje();
  const alumnosJson = JSON.stringify(alumnos);
  localStorage.setItem("alumnos", alumnosJson);

  console.log(alumnos);
}

function verMensaje() {
  let guardarAlumno = document.getElementById("guardarAlumno");
  mensaje.classList.add("d-block");
}

function limpiar() {
  mensaje.classList.remove("d-block");
}

/*--------------------------------------------------------------
# fin nuevo alumno
--------------------------------------------------------------*/

/*--------------------------------------------------------------
#Buscar Alumno
--------------------------------------------------------------*/

const busquedaDni = () => {
  let dniBusqueda = document.getElementById("dniBusqueda");
  let dniBuscado = dniBusqueda.value;

  if (alumnos.find((el) => el.dni === dniBuscado)) {
    for (let index = 0; index < alumnos.length; index++) {
      if (dniBuscado === alumnos[index].dni) {
        let resultadoBusqueda = document.getElementById("contenedorBusqueda");
        resultadoBusqueda.innerHTML = `<p class="enLinea" >Nombre:<p class="enLinea">${alumnos[index].nombre}</p></p>
      <p class="enLinea" >Apellido:<p class="enLinea">${alumnos[index].nombre}</p></p>
      <p class="enLinea" >Nacionalidad:<p class="enLinea">${alumnos[index].nombre}</p></p>
      <p class="enLinea" >Telefono:<p class="enLinea">${alumnos[index].nombre}</p></p>
      <p class="enLinea" >Email:<p class="enLinea">${alumnos[index].nombre}</p></p>`;
        // alert("El Dni Nro: " + alumnos[index].dni + " Esta registrado al Alumno: " + alumnos[index].nombre)
      }
    }
  } else {
    let resultadoBusqueda = document.getElementById("contenedorBusqueda");
    resultadoBusqueda.innerHTML = `<p>El Dni consultado , no se encuentra registrado.</p>`;
  }
};

// alumnos.push(new Alumno(document.getElementById("nombre").value, document.getElementById("dni").value))
// alumnoNuevo.reset()
// verMensaje()
// const alumnosJson =JSON.stringify(alumnos)
// localStorage.setItem("alumnos", alumnosJson)

// console.log(alumnos)

function verMensajeBusqueda() {
  let guardarAlumno = document.getElementById("guardarAlumno");
  mensaje.classList.add("d-block");
}

function limpiarBusqueda() {
  mensaje.classList.remove("d-block");
}

//
/*--------------------------------------------------------------
# fin buscar alumno 
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Listado de alumnos 
--------------------------------------------------------------*/

let listadoAlumnos = JSON.parse(localStorage.getItem("alumnos"));
console.log(listadoAlumnos);

// console.log(listadoAlumnos[index].nombre)
const mostrarlistadoAlumnos = () => {
  for (let index = 0; index < listadoAlumnos.length; index++) {
    let resultadoListado = document.getElementById("contenedorListado");
    resultadoListado.innerHTML += `<p class="enLinea" >Dni:<p class="enLinea">${listadoAlumnos[index].dni}<p class="enLinea" >Nombre:<p class="enLinea">${listadoAlumnos[index].nombre}</p></p></p></p>`;
  }
};

let listAlum = document.getElementById("botonListado");
listAlum.onclick = mostrarlistadoAlumnos;

/*--------------------------------------------------------------
# fin listado de alumnos 
--------------------------------------------------------------*/
// const CargarNotas = (dni) => {

//   for (let index = 0; index < alumnos.length; index++) {
//     if (document.getElementById("ingDni").value === dni) {

//       var select = document.getElementById("matEle")

//       select.addEventListener("change", function() {
//         var selectedOpcion = this.options[select.selectedIndex]
//         console.log(this.options[select.selectedIndex])
//         // console.log(alumnos[index].dni)
//         // let materiaElegida = document.getElementsByClassName("matEle")
//         alumnos[index].Materia[selectedOpcion].nota1 = document.getElementById("nota1").value
//         alumnos[index].Materia[selectedOpcion].nota2 = document.getElementById("nota2").value
//         alumnos[index].Materia[selectedOpcion].nota3 = document.getElementById("nota3").value
//         console.log(alumnos[index].dni)

//       })

//       }
//     }
//   }

//  let dnidni = document.getElementById("ingDni")
//  let dni =  ingDni.value
//  ingDni.addEventListener("change", a )
//  function a() {
//   alert(dni)
//  }
//

//  function a() {
//   console.log(dni)
//  }
//  alumnos[index].materias[i].nota1
// let eee = document.getElementById("matEle").value
// console.log(eee = onchange)

// const CargarNotas = (ingDni[value]) => {
//   for (let index = 0; index < alumnos.length; index++){
//   if (dni === alumnos[index].dni ) {
//     alert("caca")
//   }
//   }}
// for (let index = 0; index < alumnos.length; index++) {
//    if (alumnos[index].dni === dnidni )

// alert("hola")
// _materias.push(new selected.nota1(nota1))

// subirNotas = document.getElementById("cargarNotas")
// subirNotas.onclick = CargarNotas

//   }

//   console.log(dnidni)
