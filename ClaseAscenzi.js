const canillas = [
  { nombre: "Honey", precio: 600 },
  { nombre: "Ipa", precio: 670 },
  { nombre: "Apa", precio: 650 },
  { nombre: "Stout", precio: 620 },
  { nombre: "Scotish", precio: 600 },
  { nombre: "Golden", precio: 550 },
];

//Aca arriba se puede hacer un contructor con las canillas! Asi implementamos lo aprendido

let carrito = [];

let seleccion = prompt(
  "Hola, somos Beerload, ¿Desea alquilar alguna de nuestras canillas en barril?"
).toLowerCase(); //.toLowerCase para bajar la letra y que siempre sea minuscula

while (seleccion !== "si" && seleccion !== "no") {
  //SIEMPRE usar === o !=== (Buena practica)
  alert("Por favor ingresá si o no");
  seleccion = prompt(
    "Hola, ¿Desea alquilar alguna de nuestras canillas en barril?"
  );
}

if (seleccion === "si") {
  alert("Estas son nuestras canillas");
  let todaslasCanillas = canillas.map(
    (canilla) => canilla.nombre + " $" + canilla.precio
  );
  alert(todaslasCanillas.join(" - "));
} else if (seleccion == "no") {
  alert("Le esperamos la proxima! Que tenga un gran dia");
}

while (seleccion != "no") {
  let canilla = prompt(
    "Agregá una barril de nuestras canillas a tu carrito, recuerda puedes elegir varias"
  );
  let precio = 0;

  if (
    canilla == "Honey" ||
    canilla == "Ipa" ||
    canilla == "Apa" ||
    canilla == "Stout" ||
    canilla == "Scotish" ||
    canilla == "Golden" //Este if no hace falta, directamente mandamos la canilla al switch, y que el switch se encargue,
    //si no coincide con ningun "case" va a ir al default.
  ) {
    switch (canilla) {
      case "Honey":
        precio = 600;
        break;
      case "Ipa":
        precio = 670;
        break;
      case "Apa":
        precio = 650;
        break;
      case "Stout":
        precio = 620;
        break;
      case "Scotish":
        precio = 600;
        break;

      default:
        if (canilla > 10);
        alert("Producto sin stock");
        break;
    }
    let canillas = parseInt(prompt("¿Cuantos barriles desea?"));

    carrito.push({ nombre: canilla, unidades: canillas, precio: precio }); //Con eso lo hariamos mas dinamico creo yo
    console.log(carrito);
  } else {
    //Movi lo que estaba aca al default. Este if habria uqe sacarlo
  }

  seleccion = prompt("¿Necesita algun barril mas?");

  while (seleccion === "no") {
    alert(
      "Excelente, veo que eso es todo, este es su total final, muchas gracias por contar con nosotros"
    );
    carrito.forEach((carritoFinal) => {
      alert(`Canilla:${carritoFinal.nombre}, Unidades:${
        carritoFinal.unidades
      }, Precio:$ ${carritoFinal.precio}
                , Total a pagar: $ ${
                  carritoFinal.unidades * carritoFinal.precio
                }`);
    });
    break;
  }
}
