let edad

//asignar informacion 
edad = Number(prompt("ingrese su edad"));

//proceso 
if (edad < 10) {
    alert("eres un niño")
}else if (edad >= 10 && edad <25) {
    alert("eres un preadolecente")
}else if (edad >= 15 && edad < 18) {
    alert("eres un adolecente")
}else if (edad >= 18 && edad <50) {
    alert("eres un adulto")
}else if (edad >=50) {
    alert("eres un adulto mayor")
};