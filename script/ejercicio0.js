let cantidad, descuento=0, monto, totalpagar;


//leer o asignar informacion
cantidad = Number(prompt('ingrese cantidad'))

//proceso
monto = cantidad * 200000;
console.log(monto)

if (cantidad<10) {
alert('no tiene descuento')
} else if (cantidad>10 && cantidad<20){
descuento = monto * 0,1
}else if (cantidad >= 20 && cantidad <30){
descuento = monto * 0.2
}else if(cantidad >= 30){
    descuento = monto * 0.4
}

totalpagar = monto - descuento;
alert('el total a pagar es'+ totalpagar)