// let alumno = "";
let alumnos = [];
 

const creaAlumno = (nombre,dni) => {
  return alumnos.push(new Alumno(nombre,dni))
 
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
  materias = _materias
}
const CargarNotas =(dni)=>{
  for (let index = 0; index < alumnos.length; index++) {
    if (dni === alumnos[index].dni) {
      for (let i = 0; i < alumnos[index].materias.length; i++) {
        alumnos[index].materias[i].nota1 = Number.parseInt(prompt("Ingrese la nota 1 de "+ alumnos[index].nombre +" en " + alumnos[index].materias[i].nombre))
        alumnos[index].materias[i].nota2 = Number.parseInt(prompt("Ingrese la nota 2 de "+ alumnos[index].nombre +" en " + alumnos[index].materias[i].nombre))
        alumnos[index].materias[i].nota3 = Number.parseInt(prompt("Ingrese la nota 3 de "+ alumnos[index].nombre +" en " + alumnos[index].materias[i].nombre))
       
      }
       
     }

    }
    
  }

  // alert(alumnos[0].materias)
  // console.log(alumnos)

const verPromedios =(dni)=>{
  for (let index = 0; index < alumnos.length; index++) {
    if (dni === alumnos[index].dni) {
      for (let i = 0; i < alumnos[index].materias.length; i++) {
        alert("Alumno: "+ alumnos[index].nombre +"\n" + "Calificacion final de " +_materias[i].nombre +": "
         + alumnos[index].materias[i].promedio(
          alumnos[index].materias[i].nota1,
          alumnos[index].materias[i].nota2,
          alumnos[index].materias[i].nota3))
          
      } 
    }
    // else if(dni != alumnos[index].dni){
    //   alert("Lo sentimos, no encontramos alumno con ese DNI")
    // }
 
  }
  
}
console.log(_materias)

menuPrincipal();

function menuPrincipal() {
  let opcion = 0;
  let menu =
    "Bienvenido al Sistema de calificaciones\n Ingrese: \n 1 - Crear Alumno\n 2 - Calificar alumno\n 3 - Ver Promedios\n 4 - Buscar alumno por DNI\n 5 - Buscar alumno por Nombre \n 0 - para salir";
  opcion = Number(prompt(menu));

  switch (opcion) {
    case 0:
      alert("Gracias por utilizar el sistema de calificaciones, Hasta pronto!")
      break;
    case 1:
      creaAlumno((prompt("ingrese nombre")).toLowerCase() , Number.parseInt(prompt("ingrese dni")));
      alert("Alumno creado con exito")
      menuPrincipal();
      console.log(alumnos)
      break;
    case 2:
      CargarNotas(Number.parseInt(prompt("Ingrese el DNI")))
      // alert("cargar materias para alumno" + alumnos.nombre)
      menuPrincipal();
      break;
    case 3:
        verPromedios(Number.parseInt.prompt("Ingrese el DNI"))
        menuPrincipal()
        break;  
    case 4: 
    for (let index = 0; index < alumnos.length; index++) {
      if (alumnos.some((el) => el.dni === Number.parseInt(prompt("ingrese dni sin puntos ni espacios")))) {
        
          // alert("El alumno: " +alumnos[index].nombre+ " con DNI: " + alumnos[index].dni + " ,ya se encuentra registrado en el sistema." )
          alert("El DNI "+ alumnos[index].dni + " Esta registrado al Alumno: " +alumnos[index].nombre)
          menuPrincipal()  
        } else {
          alert("Ingrese solo numeros")
          menuPrincipal()
        }
      }
        break;
      case 5: 
        for (let index = 0; index < alumnos.length; index++) {
          if (alumnos.filter((el) => el.nombre.includes(prompt("ingrese Nombre y Apellido").toLowerCase()))){
            
               alert("El alumno: " +alumnos[index].nombre+ " con DNI: " + alumnos[index].dni + " ,ya se encuentra registrado en el sistema." )
              // alert("el DNI "+ alumnos[index].dni + "Esta registrado al Alumno: " +alumnos[index].nombre)
                
            } 
          }
          break;  
    
    default:
      alert("Opcion incorrecta");
      menuPrincipal();
  }
}
// console.log(alumnos)

// const resultado = alumnos.find((el) => el.nombre === prompt("ingrese nombre"))




// function creaAlumno(nombre, dni) {
  
//   alumnos.push(
//     new Alumno(
//       this.nombre = nombre,
//       this.dni = dni
//     )
    
//   );
//   // console.log(alumnos)
//   // console.log(alumnos[0].materias[0].promedio())
// }




// function menuMaterias() {
//   let opcion = 0;
//   let menu =
//     "Ingrese Materia a calificar\n 1 - Matematicas\n 2 - Fisica\n 3 - Historia\n 4 - Ver boletin\n 5 - Calificar otro alumno\n 0 - para salir";

//   let nota = 0;
//   let notaMat = 0;
//   let notaFis = 0;
//   let notaHis = 0;

//   do {
//     opcion = Number(prompt(menu));
//     switch (opcion) {
//       case 0:
//         alert("Gracias");
//         break;
//       case 1:
//         notaMat = promedio();
//         alert(
//           "La nota final de: " + alumno + " para matematica es: " + notaMat
//         );
//         break;
//       case 2:
//         notaFis = promedio();
//         alert("La nota final de: " + alumno + " para Fisica es: " + notaFis);
//         break;
//       case 3:
//         notaHis = promedio();
//         alert("La nota final de: " + alumno + " para Historia es: " + notaHis);
//         break;
//       case 4:
//         VerBoletin(notaMat, notaFis, notaHis);
//         break;
//       case 5:
//         menuPrincipal();
//         break;
//       default:
//         alert("opcion incorrecta");
//     }
//   } while (opcion != 0);
// }

// function VerBoletin(Pmate, Pfisica, Phistoria) {
//   alert(
//     "Alumno: " +
//       alumno +
//       "\n" +
//       "Matematica: " +
//       Pmate +
//       "\n" +
//       "Fisica: " +
//       Pfisica +
//       "\n" +
//       "Historia: " +
//       Phistoria +
//       "\n"
//   );
// }

// function promedio() {
//   let nota = 0;
//   for (let index = 0; index < 3; index++) {
//     nota = nota + Number(prompt("ingrese nota " + (index + 1)));
//   }
//   return (nota / 3).toFixed(2);
// }
