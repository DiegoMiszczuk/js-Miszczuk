let alumno = "";
menuPrincipal();

function menuPrincipal() {
  let opcion = 0;
  let menu =
    "Bienvenido al Sistema de calificaciones\n Ingrese: \n 1 - Calificar\n 0 - para salir";
  opcion = Number(prompt(menu));

  switch (opcion) {
    case 0:
      alert("Gracias");
      break;
    case 1:
      alumno = creaAlumno();
      menuMaterias();
      break;
    default:
      alert("Opcion incorrecta");
      menuPrincipal();
  }
}

function creaAlumno() {
  return prompt("Ingrese nombre del alumno");
}

function menuMaterias() {
  let opcion = 0;
  let menu =
    "Ingrese Materia a calificar\n 1 - Matematicas\n 2 - Fisica\n 3 - Historia\n 4 - Ver boletin\n 0 - para salir";

  let nota = 0;
  let notaMat = 0;
  let notaFis = 0;
  let notaHis = 0;

  do {
    opcion = Number(prompt(menu));
    switch (opcion) {
      case 0:
        alert("Gracias");
        break;
      case 1:
        notaMat = promedio();
        alert(
          "La nota final de: " + alumno + " para matematica es: " + notaMat
        );
        break;
      case 2:
        notaFis = promedio();
        alert("La nota final de: " + alumno + " para Fisica es: " + notaFis);
        break;
      case 3:
        notaHis = promedio();
        alert("La nota final de: " + alumno + " para Historia es: " + notaHis);
        break;
      case 4:
        VerBoletin(notaMat, notaFis, notaHis);
        break;
      default:
        alert("opcion incorrecta");
    }
  } while (opcion != 0);
}

function VerBoletin(Pmate, Pfisica, Phistoria) {
  alert(
    "Alumno: " +
      alumno +
      "\n" +
      "Matematica: " +
      Pmate +
      "\n" +
      "Fisica: " +
      Pfisica +
      "\n" +
      "Historia: " +
      Phistoria +
      "\n"
  );
}

function promedio() {
  let nota = 0;
  for (let index = 0; index < 3; index++) {
      nota = nota + Number(prompt("ingrese nota " + (index + 1)));  
  }
  return (nota / 3).toFixed(2);
}
