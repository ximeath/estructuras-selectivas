let nombre,salario,deducciones,bonificaciones,nombre1,nombre2

//asignar imformacion 

nombre = prompt("ingrese nombre del trabajador 1")
nombre2 = prompt("ingrese nombre del trabajador 2")
salario = Number(prompt("ingrese el salario del empleado 1"))
salario2 = Number(prompt("ingrese el salario del empleado 2"))
deducciones = Number(prompt("ingrese deducciones del trabajador 1"))
deducciones2 = Number(prompt("ingrese deducciones del trabajador 2"))
bonificaciones = Number(prompt("ingrese las bonificaciones del trabajador 1"))
bonificaciones2 = Number(prompt("ingrese las bonificaciones del trabajador 2"))


//proceso 


if (salario > salario2) {
    alert("el salario mayor es: " + nombre)
} else {
    alert("el salario mayor es: " + nombre2)
}