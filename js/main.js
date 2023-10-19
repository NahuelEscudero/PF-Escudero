
/*Declaro arreglo de objetos. Cada objeto es un producto distinto que tiene un nombre y cantidad en stock*/

const stockDepYFit = [
    {nombreProd: "Pelota Cobra Futsal", stock: 0},
    {nombreProd: "Guantes de Boxeo Profesional", stock: 5},
    {nombreProd: "Skate Calavera y Trivial", stock: 8}
];

const stockAccVehic = [
    {nombreProd: "Cable Espiral 0K051", stock: 10},
    {nombreProd: "Cable Espiral EV06E", stock: 0},
    {nombreProd: "Cable Espiral 12070", stock: 4}
];

const stockIndYOfi = [
    {nombreProd: "Cañon Ozonizador 10g/h", stock: 7},
    {nombreProd: "Placa Ozonizadora 28g/h", stock: 15},
    {nombreProd: "Tinta Amarilla 5151", stock: 0}
];

let ingreso1 = 0;
let ingreso2 = 0;
let ingreso3 = 0;
let ingreso4 = 0;


const compra = () => {
    
    while(ingreso1 != 4){ 

        let opc = Number(prompt(`Que categoria le interesa?:
        1- Deportes y Fitness
        2- Accesorios de Vehiculos
        3- Industrias y Oficinas
        4- SALIR`));
        
        switch(opc){
            case 1: 

                while(ingreso2 != 4) {
                    let op = Number(prompt(`Que articulo desea comprar?: 
                    1. Pelota
                    2. Guantes de boxeo
                    3. Skate 
                    4. Salir`));

                    switch(op) {
                        case 1:
                            verificarStock(stockDepYFit[0]);
                            ingreso2 = 4;
                            break;
                        case 2:
                            verificarStock(stockDepYFit[1]);
                            ingreso2 = 4;
                            break;
                        case 3:
                            verificarStock(stockDepYFit[2]);
                            ingreso2 = 4;
                            break;
                        case 4:
                            break;
                        default:
                            alert("Por favor ingrese un numero valido");
                    }
                    if(op == 4){
                        ingreso2 = 4;
                        ingreso1 = 4;
                    } else {
                        comprarMas();
                    }
                }
                ingreso2 = 0;
                break;
            case 2:
                
                while(ingreso3 != 4) {
                    let op1 = Number(prompt(`Que articulo desea comprar?:
                    1. Cable Espiral 0K051
                    2. Cable Espiral EV06E
                    3. Cable Espiral 120704
                    4. Salir`));

                    switch(op1) {
                        case 1:
                            verificarStock(stockAccVehic[0]);
                            ingreso3 = 4;
                            break;
                        case 2:
                            verificarStock(stockAccVehic[1]);
                            ingreso3 = 4;
                            break;
                        case 3:
                            verificarStock(stockAccVehic[2]);
                            ingreso3 = 4;
                            break;
                        case 4:
                            break;
                        default:
                            alert("Por favor ingrese una opcion valida");
                    }
                    if(op1 == 4){
                        ingreso3 = 4;
                        ingreso1 = 4;
                    } else {
                        comprarMas();
                    }
                }
                ingreso3 = 0;
                break;
            case 3:
                while(ingreso3 != 4) {
                    let op2 = Number(prompt(`Que articulo desea comprar?:
                    1. Cañon Ozonizador
                    2. Placa Ozonizadora
                    3. Tinta 5151
                    4. Salir`));

                    switch(op2) {
                        case 1:
                            verificarStock(stockIndYOfi[0]);
                            ingreso4 = 4;
                            break;
                        case 2:
                            verificarStock(stockIndYOfi[1]);
                            ingreso4 = 4;
                            break;
                        case 3:
                            verificarStock(stockIndYOfi[2]);
                            ingreso4 = 4;
                            break;
                        case 4:
                            break;
                        default:
                            alert("Por favor ingrese una opcion valida");
                    }
                    if(op2 == 4){
                        ingreso4 = 4;
                        ingreso1 = 4;
                    } else {
                        comprarMas();
                    }
                }
                ingreso4 = 0;
                break;
            case 4:
                ingreso1 = 4;
                break;
            default:
                alert("Ingrese una opcion valida");
        }
    }
}

/*Funcion que checkea cantidades de un producto ingresando al arreglo y verifica el stock de este. */
const verificarStock = producto => {
    if (producto.stock > 0){
        alert(`${producto.nombreProd} comprado exitosamente`);
    } else {
        alert(`No tenemos stock de ${producto.nombreProd}`);
    }
}

/*Funcion que almacena una variable que define por switch si entra de nuevo a la funcion compra(),
o cierra el programa*/
const comprarMas = () => {
    let reCompra = Number(prompt(`Desea comprar algo mas? 
    1-SI 
    2-NO`));

    switch(reCompra) {
        case 1: 
            ingreso2 = 4;
            break;
        case 2:
            ingreso2 = 4;
            ingreso1 = 4;
            break;
        default:
            alert("Ingrese una opcion valida");
    }

    return reCompra;
}



/*Funcion que recibe un parametro donde el valor tiene que ser el nombre de un arreglo de objetos y
a traves de condiciones logicas (if, else if y else), muestra en pantalla los articulos correspondientes
a cada arreglo*/
// const eleccionArticulo = categoriaStock => {
//     if (categoriaStock == "stockDepYFit") {
//         let op = Number(prompt(`Que articulo desea comprar?: 1. ${stockDepYFit[0].nombreProd} _ 2. Guantes de boxeo _ 3. Skate _ 4. Salir`));
//         while(op != 4) {
//             switch(op) {
//                 case 1:
//                     verificarStock(stockDepYFit[0]);
//                     break;
//                 case 2:
//                     verificarStock(stockDepYFit[1]);
//                     break;
//                 case 3:
//                     verificarStock(stockDepYFit[2]);
//                     break;
//                 case 4:
//                     break;
//                 default:
//                     alert("Por favor ingrese un numero valido");
//                     eleccionArticulo();
//             }
//         }
//     } else if(categoriaStock == "stockAccVehic") {

//     }

    
// }



compra();
