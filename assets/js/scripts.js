let alumnos = [];

const creaAlumno = (nombre, dni) => {
  return alumnos.push(
    new Alumno(nombre, apellido, dni, nacionalidad, direccion, telefono, email)
  );
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
    return (
      (Number(this.nota1) + Number(this.nota2) + Number(this.nota3)) /
      3
    ).toFixed(2);
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
  constructor(nombre, apellido, dni, nacionalidad, direccion, telefono, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.nacionalidad = nacionalidad;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
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

/*--------------------------------------------------------------
# Calificar Alumno
--------------------------------------------------------------*/

const cargarNotas = () => {
  let opcionMateria = document.getElementById("matEle");
  materiaElegida = opcionMateria.value;

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
    }
    mostrarSweetAlert("Materia calificada con exito", "success", false,2000);
    limpiarImputs("nota1")
    limpiarImputs("nota2")
    limpiarImputs("nota3")
  }
  
};

function limpiarImputs(id) {
  document.getElementById(id).value = ""
}
// function materiaCalificada() {
//   Swal.fire({
//     icon: "success",
//     title: "Materia Calificada con exito!!",
//     showConfirmButton: false,
//     timer: 2000,
//   });
// }

/*--------------------------------------------------------------
# Fin calificar alumno
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Ver promedios
--------------------------------------------------------------*/
const verNotasPromedio = () => {
  let opcionMateriaPromedio = document.getElementById("matElePromedio");
  materiaElegidaPromedio = opcionMateriaPromedio.value;
  let dniIngresadoPromedio = document.getElementById("dniPromedio");
  let dni = dniIngresadoPromedio.value;
  for (let index = 0; index < alumnos.length; index++) {
    if (dni === alumnos[index].dni) {
      mostrarToastify("promedio creado","left",2000,"bottom");
      let resultadoPromedio = document.getElementById("contenedorPromedio");
      resultadoPromedio.innerHTML = `<p class="enLinea" >Nombre:<p class="enLinea">${
        alumnos[index].nombre
      }</p></p>
      <p class="enLinea" >Apellido:<p class="enLinea">${
        alumnos[index].apellido
      }</p></p>
      <p class="enLinea" >Promedio:<p class="enLinea">${alumnos[index].materias[
        materiaElegidaPromedio
      ].promedio(
        alumnos[index].materias[materiaElegidaPromedio].nota1,
        alumnos[index].materias[materiaElegidaPromedio].nota2,
        alumnos[index].materias[materiaElegidaPromedio].nota3
      )}</p></p>
      `;
    } else {
      let resultadoPromedio = document.getElementById("contenedorPromedio");
      resultadoPromedio.innerHTML = `<p>El Dni consultado , no se encuentra registrado.</p>`;
    }
    limpiarImputs("dniPromedio")
  }
  
};
// function tostadaPromedio() {
//   Toastify({
//     text: "Promedio Creado!",
//     position: "left",
//     duration: 3000,
//     gravity: "bottom",
//     style: {
//       background: " #ffc451",
//     },
//   }).showToast();
// }
/*--------------------------------------------------------------
# Nuevo Alumno
--------------------------------------------------------------*/
function nuevoAlumno() {
  alumnos.push(
    new Alumno(
      document.getElementById("nombre").value,
      document.getElementById("apellido").value,
      document.getElementById("dni").value,
      document.getElementById("nacionalidad").value,
      document.getElementById("direccion").value,
      document.getElementById("telefono").value,
      document.getElementById("email").value
    )
  );
  alumnoNuevo.reset();
  verMensaje();
  const alumnosJson = JSON.stringify(alumnos);
  localStorage.setItem("alumnos", alumnosJson);
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
        mostrarSweetAlert("Alumno encontrado", "success", false, 2000);
        let resultadoBusqueda = document.getElementById("contenedorBusqueda");
        resultadoBusqueda.innerHTML = `<p class="enLinea" >Nombre:<p class="enLinea">${alumnos[index].nombre}</p></p>
      <p class="enLinea" >Apellido:<p class="enLinea">${alumnos[index].apellido}</p></p>
      <p class="enLinea" >Nacionalidad:<p class="enLinea">${alumnos[index].nacionalidad}</p></p>
      <p class="enLinea" >Telefono:<p class="enLinea">${alumnos[index].telefono}</p></p>
      <p class="enLinea" >Email:<p class="enLinea">${alumnos[index].email}</p></p>`;
      }
    }
  } else {
    let resultadoBusqueda = document.getElementById("contenedorBusqueda");
    resultadoBusqueda.innerHTML = `<p>El Dni consultado , no se encuentra registrado.</p>`;
    mostrarSweetAlert("alumno no encontrado", "warning", false, 2000)
    limpiarImputs("dniBusqueda")
  }
};


// function verMensajeBusqueda() {
//   let guardarAlumno = document.getElementById("guardarAlumno");
//   guardarAlumno.classList.add("d-block");
// }

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

const mostrarlistadoAlumnos = () => {
  for (let index = 0; index < listadoAlumnos.length; index++) {
    let resultadoListado = document.getElementById("contenedorListado");
    resultadoListado.innerHTML += `<p class="enLinea" >Dni:<p class="enLinea">${listadoAlumnos[index].dni}<p class="enLinea" >Nombre:<p class="enLinea">${listadoAlumnos[index].nombre}<p class="enLinea" >Apellido:<p class="enLinea">${listadoAlumnos[index].apellido}</p></p></p></p></p>`;
  }
  mostrarToastify("listado creado", "left",2000, "bottom")
 
};

let listAlum = document.getElementById("botonListado");
listAlum.onclick = mostrarlistadoAlumnos;

/*--------------------------------------------------------------
# fin listado de alumnos 
--------------------------------------------------------------*/
function mostrarSweetAlert(titulo,icono,mostrarBoton,tiempo) {
  Swal.fire({
    title: titulo,
    icon: icono,
    showConfirmButton: mostrarBoton,
    timer: tiempo,
  });
}
function mostrarToastify(texto,posicion,tiempo,altura,) {
  Toastify({
    text: texto,
    position: posicion,
    duration: tiempo,
    gravity: altura,
    style: {
      background: " #ffc451",
    },
  }).showToast();
}

/*--------------------------------------------------------------
#  usuarios en json
--------------------------------------------------------------*/
let inicioSesion = document.getElementById("iniciarSesion")
inicioSesion.onclick = pedirUsuario

async function pedirUsuario() {
  let usuario = document.getElementById("usuario")
  usuarioIngresado = usuario.value
  let clave = document.getElementById("password")
  claveIngresada = clave.value
  const resp = await fetch("../assets/js/usuarios.json")
  const usuarios = await resp.json()
 
 usuarios.forEach(element => {
  if (element.usuario === usuarioIngresado && element.pass === claveIngresada) {
    console.log(element.usuario)
    mostrarToastify("bienvenido " + element.usuario, "left",2000, "bottom")
    let sesionActiva = document.getElementById("nombreUsuario")
    sesionActiva.innerHTML = `${(element.usuario).toUpperCase()}<i class="bi bi-person"></i>`
  }
  limpiarImputs("usuario")
  limpiarImputs("password")
});
}

/*--------------------------------------------------------------
#  
--------------------------------------------------------------*/
/*--------------------------------------------------------------
#  Registro Usuario
--------------------------------------------------------------*/

// let usuario = document.getElementById("usuario")
// let contraseña = document.getElementById("contraseña")

// let usuarios = []

// class Usuario {
//   constructor(usuario,contraseña) {
//     this.usuario = usuario;
//     this.contraseña = contraseña;

//   }
// }

// function nuevoUsuario() {
//   usuarios.push(
//     new Usuario(
//       document.getElementById("usuario").value,
//       document.getElementById("contraseña").value,

//       ))
//       const usuariosJson = JSON.stringify(usuarios);
//       localStorage.setItem("usuarios", usuariosJson);
//       verMensajeRegistro()
//       datosUsuario.reset()

//     }

//    console.log(usuarios)

// let ingreso = document.getElementById("registrarse")
// ingreso.onclick = nuevoUsuario

// function verMensajeRegistro() {
//   let guardarAlumno = document.getElementById("guardarAlumno");
//   mensaje2.classList.add("d-block");
// }

// function limpiarRegistro() {
//   mensaje2.classList.remove("d-block");
// }
/*--------------------------------------------------------------
#  Fin Registro Usuario
--------------------------------------------------------------*/
/*--------------------------------------------------------------
#  Inicio Sesión
--------------------------------------------------------------*/

// let registrados = JSON.parse(localStorage.getItem("usuarios"));

// function ingreso(usuario,contraseña) {
//   for (let index = 0; index < registrados.length; index++) {
//     if (registrados[index].usuario === usuario && registrados[index].contraseña === contraseña) {
//       alert("hola")
//     } else {
//       alert("chau")
//     }

//   }
// }

// let inicioSesion = document.getElementById("iniciarSesion")
// inicioSesion.onclick = ingreso
