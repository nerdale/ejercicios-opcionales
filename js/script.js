// #1 Elaborar una función a la  cual le enviaremos tres enteros y muestra  el menos

function numeroMenor(){
	var ar_menor=[];
	var numeroMenor = Math.min.apply(null, ar_menor);
	for (var i = 0; i <3; i++){
		ar_menor.push(prompt("Ingrese un número"));
	}
	return alert("el número menor entre " + ar_menor[0] + ", " + ar_menor[1] + " y " + ar_menor[2]+ " es " + Math.min.apply(null, ar_menor));
}
/* #2 Escribir el codigo de una funcion a la que se pasa como parametro un numero entero 
y devuelve como resultado un cadena de texto que indica si el numero es par o impar 
mostrar por pantalla el resultado devuelto por la funcion*/
function numerosPares(){
	var arreglo_numeros = [];
	for(var i = 0; i < 5; i++){
		arreglo_numeros.push(prompt("Ingrese un numero (en total 5)"));
	}
	var pares = arreglo_numeros.filter(function (num) {
		if( num >= 1){
			return num % 2 === 0;
		}
	})
	return alert("Los números ingresados son: " + arreglo_numeros + " y los números pares son: " + pares);
}

// #3 Realizar una función a la cual le envie tres enteros y los muestre ordenados de menor  a mayor 
function menorMayorArreglo(){
	var menor_mayor = [];
	var texto = "Los números ordenados de menor a mayor es ";
	for(var i = 0; i < 3; i++){
		menor_mayor.push(prompt("Ingrese un numero"));
	}
	function comparacion(primero, segundo) {
		return primero - segundo; //-1 0 1
	}
	return alert(texto + menor_mayor.sort(comparacion));
}
// #7 Realizar un programa que calcule el cuadrado de la suma de dos numeros
function sumaCuadrado(){
	var arreglo = [3, 2];
	var suma = [3, 2].reduce(suma, 0);
	function suma(elementoUno, elementoDos) {
		return elementoUno + elementoDos;
	}
	return alert("El resultado de la sumatoria entre los números  " + arreglo[0] + " y " + arreglo[1] + " es " + suma + " y el cuadrado del resultado es " + Math.pow(suma,2));
}

function sumaCuadrado(){
	var numeros = [3,2];
	var sum = 0;
	for(var i = 0; i < numeros.length; i++){
		sum += numeros[i]
	}
	return alert("La suma entre los números " + numeros[0] + " y " + numeros[1] + " es: " + sum +  " y el cuadrado del resultado es " + Math.pow(sum,2));
}
