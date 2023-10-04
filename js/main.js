let opc = Number(prompt("Que categoria le interesa?: 1- Deportes y Fitness _ 2- Accesorios de Vehiculos _ 3- Industrias y Oficinas _ 4- SALIR"));

let stockDepYFit = [
    {nombreProd: "Pelota Cobra Futsal", stock: 0},
    {nombreProd: "Guantes de Boxeo Profesional", stock: 5},
    {nombreProd: "Skate Calavera y Trivial", stock: 8}
];

let stockAccVehic = [
    {nombreProd: "Cable Espiral 0K051", stock: 10},
    {nombreProd: "Cable Espiral EV06E", stock: 0},
    {nombreProd: "Cable Espiral 12070", stock: 4}
];

let stockIndYOfi = [
    {nombreProd: "Cañon Ozonizador 10g/h", stock: 7},
    {nombreProd: "Placa Ozonizadora 28g/h", stock: 15},
    {nombreProd: "Tinta Amarilla 5151", stock: 0}
];



const verificarStock = producto => {
    if (producto.stock == 0){
        alert("No tenemos stock del producto que solicita");
        
    } else {
        alert(`${producto.nombreProd} comprado exitosamente`);
    }
}

while(opc != 4){
    switch(opc){
        case 1:
            let op = Number(prompt("Que articulo desea comprar?: 1. Pelota _ 2. Guantes de boxeo _ 3. Skate"));
            while(op != 4) {
                switch(op) {
                    case 1:
                        verificarStock(stockDepYFit[0]);
                        break;
                    case 2:
                        verificarStock(stockDepYFit[1]);
                        break;
                    case 3:
                        verificarStock(stockDepYFit[2]);
                        break;
                    case 4:
                        break;
                    default:
                        alert("Por favor ingrese un numero valido");
                }
            }
        case 2:
            let op1 = Number(prompt("Que articulo desea comprar?: 1. Cable Espiral 0K051 _ 2. Cable Espiral EV06E _ 3. Cable Espiral 12070"));
            while(op1 != 4) {
                switch(op1) {
                    case 1:
                        verificarStock(stockAccVehic[0]);
                        break;
                    case 2:
                        verificarStock(stockAccVehic[1]);
                        break;
                    case 3:
                        verificarStock(stockAccVehic[2]);
                        break;
                    case 4:
                        break
                    default:
                        alert("Por favor ingrese un numero valido");
                }
            }
        case 3:
            let op2 = Number(prompt("Que articulo desea comprar?: 1. Cañon Ozonizador _ 2. Placa Ozonizadora _ 3. Tinta 5151"));
            while(op2 != 4) {
                switch(op2) {
                    case 1:
                        verificarStock(stockIndYOfi[0]);
                        break;
                    case 2:
                        verificarStock(stockIndYOfi[1]);
                        break;
                    case 3:
                        verificarStock(stockIndYOfi[2]);
                        break;
                    case 4:
                        break
                    default:
                        alert("Por favor ingrese un numero valido");
                }
            }
        case 4:
            break;
        default:
            alert("Ingrese un numero valido");
    }
}

