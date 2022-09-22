const canillas = [
    {nombre: "Honey", precio: 600,},
    {nombre: "Ipa", precio: 670,},
    {nombre: "Apa", precio: 650,},
    {nombre: "Stout", precio: 620,},
    {nombre: "Scotish", precio: 600,},
    {nombre: "Golden", precio: 550,}
    
];

let carrito = []

let seleccion = prompt("Hola, somos Beerload, ¿Desea alquilar alguna de nuestras canillas en barril?");

while (seleccion != "si" && seleccion != "no"){
    alert ("Por favor ingresá si o no")
    seleccion = prompt("Hola, ¿Desea alquilar alguna de nuestras canillas en barril?");
}

if (seleccion == "si"){
    alert ("Estas son nuestras canillas")
    let todaslasCanillas = canillas.map((canilla) => canilla.nombre + " $" + canilla.precio);
    alert (todaslasCanillas.join(" - "));
} else if (seleccion == "no"){
    alert("Le esperamos la proxima! Que tenga un gran dia");
}

while (seleccion != "no"){
    let canilla = prompt ("Agregá una barril de nuestras canillas a tu carrito, recuerda puedes elegir varias");
    let precio = 0;

    if (canilla == "Honey" 
    || canilla == "Ipa" 
    || canilla == "Apa" 
    || canilla == "Stout" 
    || canilla == "Scotish"
    || canilla == "Golden"){
        switch (canilla){
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
                break;
        }
        let canillas = parseInt (prompt ("¿Cuantos barriles desea?"))
        
        carrito.push({nombre: "Golden",unidades: canillas, precio: 550})
        console.log(carrito);
    }else {
       if (canilla > 10);
        alert ("Producto sin stock")
    }

    seleccion = prompt ("¿Necesita algun barril mas?")

    while (seleccion === "no"){
        alert ("Excelente, veo que eso es todo, este es su total final, muchas gracias por contar con nosotros")
        carrito.forEach(carritoFinal =>{
            alert(`Canilla:${carritoFinal.nombre}, Unidades:${carritoFinal.unidades}, Precio:$ ${carritoFinal.precio}
                , Total a pagar: $ ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}
