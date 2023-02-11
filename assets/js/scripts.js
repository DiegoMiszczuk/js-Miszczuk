let alumnos = [];
console.log(alumnos)
/*--------------------------------------------------------------
# consulta a Local storage
--------------------------------------------------------------*/
 let alumnosLs = JSON.parse(localStorage.getItem("alumnos"))

if (alumnosLs){
  alumnos = alumnosLs
}
console.log(alumnos)
/*--------------------------------------------------------------
# consulta a Local storage
--------------------------------------------------------------*/
const creaAlumno = (nombre, apellido, dni, nacionalidad, direccion, telefono, email) => {
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
      MostrarSweetAlert("Materia Calificada con exito!!","success",false,2000);
    }
    else{
      MostrarSweetAlert("No se encuentra el alumno!!","warning",false,2000);
    }
  }
};

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
      mostrarToastify("promedio creado!", "left", 3000, "bottom")
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
  }
};

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
        MostrarSweetAlert("Alumno encontrado", "success", false, 2000);
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
    MostrarSweetAlert("alumno no encontrado","warning", false, 2000)
  }
};


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

const mostrarlistadoAlumnos = () => {
  for (let index = 0; index < listadoAlumnos.length; index++) {
    let resultadoListado = document.getElementById("contenedorListado");
    resultadoListado.innerHTML += `<p class="enLinea" >Dni:<p class="enLinea">${listadoAlumnos[index].dni}<p class="enLinea" >Nombre:<p class="enLinea">${listadoAlumnos[index].nombre}<p class="enLinea" >Apellido:<p class="enLinea">${listadoAlumnos[index].apellido}</p></p></p></p></p>`;
  }
  mostrarToastify("Listado creado!", "left", 3000, "bottom")
}
let listAlum = document.getElementById("botonListado");
listAlum.onclick = mostrarlistadoAlumnos;

/*--------------------------------------------------------------
# fin listado de alumnos 
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Sweet Alert 
--------------------------------------------------------------*/
function MostrarSweetAlert(titulo,icono,mostrarBoton,tiempo) {
  Swal.fire({
    title: titulo,
    icon: icono,
    showConfirmButton: mostrarBoton,
    timer: tiempo,
  });
}

/*--------------------------------------------------------------
# Toastify
--------------------------------------------------------------*/
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
#  Registro Usuario
--------------------------------------------------------------*/

let usuario = document.getElementById("usuario")
let contraseña = document.getElementById("contraseña")

let usuarios = []
let usuariosLs = JSON.parse(localStorage.getItem("usuarios"))

if (usuariosLs){
  usuarios = usuariosLs
}
console.log(usuarios)
class Usuario {
  constructor(usuario,contraseña) {
    this.usuario = usuario;
    this.contraseña = contraseña;

  }
}

function nuevoUsuario() {
  usuarios.push(
    new Usuario(
      document.getElementById("usuario").value,
      document.getElementById("contraseña").value,

      ))
      const usuariosJson = JSON.stringify(usuarios);
      localStorage.setItem("usuarios", usuariosJson);
      MostrarSweetAlert("Registro exitoso!!!","success", false, 2000)
      datosUsuario.reset()

    }

   console.log(usuarios)

let ingreso = document.getElementById("registrarse")
ingreso.onclick = nuevoUsuario

function verMensajeRegistro() {
  // let guardarAlumno = document.getElementById("guardarAlumno");
  mensaje2.classList.add("d-block");
}

function limpiarRegistro() {
  mensaje2.classList.remove("d-block");
}
/*--------------------------------------------------------------
#  Fin Registro Usuario
--------------------------------------------------------------*/
/*--------------------------------------------------------------
#  Inicio Sesión
--------------------------------------------------------------*/
// let nombreIngreso = document.getElementById("usuario")
// let pass = document.getElementById("pass")
// let usuaLs = (localStorage.getItem("usuarios"))
// console.log(usuaLs)
fetch (localStorage.getItem("usuarios"))
  .then((resp)=> resp.json)
  .then((data)=> console.log(data))
  // .then((data)=> {
  //   for (let index = 0; index < data.length; index++) {
  //     if (nombreIngreso === data[index].usuario && pass === data[index].contraseña) {
  //       alert("hola")
  //     }
      
  //   }
  // })
// let formulario = document.getElementById("datosUsuario")
// formulario.addEventListener("submit", function(e) {
//   e.preventDefault();
//   console.log("click")
//   let datos = new FormData(formulario);
//   console.log(datos)
//   console.log(datos.get("usuario"))
//   console.log(datos.get("pass"))

//   fetch("../asset/js/login.php",{
//     method: "POST",
//     body: datos
//   })
//     .then(res => res.json)
//     .then(data=>{
//       console.log(data)
//     })
// })
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
/*--------------------------------------------------------------
#  fetch
--------------------------------------------------------------*/


// fetch("../assets/js/alumnos.json", {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Coderhouse',
//             body: 'Post de prueba',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//       .then((response)=> response.json)
//       .then((data)=> console.log(data))
//       .catch((error)=> console.log(error))

      // let url = "../assets/js/alumnos.json";
      // let data = localStorage.getItem("usuarios")
      
      // fetch(url, {
      //   method: 'POST', // or 'PUT'
      //   body: (data), // data can be `string` or {object}!
      //   headers:{
      //     'Content-Type': 'application/json'
      //   }
      // }).then(res => res.json())
      // .catch(error => console.log(error))
      // .then(response => console.log(response));


// fetch("../assets/js/alumnos.json")
//   .then(response => response.json())
//   .then(data => console.log(data));