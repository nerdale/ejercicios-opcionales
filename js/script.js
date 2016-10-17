// #1 Elaborar una función a la  cual le enviaremos tres enteros y muestra  el menos
var ar_menor=[];
function numeroMenor(ar_menor){
	var numeroMenor = Math.min.apply(null, ar_menor);
	for (var i = 0; i <3; i++){
		ar_menor.push(prompt("Ingrese un número"));
	}
	alert("el número menor entre " + ar_menor[0] + ", " + ar_menor[1] + " y " + ar_menor[2]+ " es " + Math.min.apply(null, ar_menor));
}
/* #2 Escribir el codigo de una funcion a la que se pasa como parametro un numero entero 
y devuelve como resultado un cadena de texto que indica si el numero es par o impar 
mostrar por pantalla el resultado devuelto por la funcion*/

function numerosPares(numeros_pares) {
	var numeros_pares = [];
	var primerNum = prompt("Indique el primer numero del arreglo");
	var ultimoNum = prompt("Indique el ultimo numero del arreglo");
	for (var i = primerNum; i <= ultimoNum; i++) {
		if((i % 2) === 0){
			numeros_pares.push(i);
		}
	}
	return alert("Los numeros pares entre " + primerNum + " y " + ultimoNum + " son: " + numeros_pares);
}
// #3 Realizar una función a la cual le envie tres enteros y los muestre ordenados de menor  a mayor 
var menor_mayor = [];
function menorMayorArreglo(menor_mayor){
	var texto = "Los números ordenados de menor a mayor es ";
	for(var i = 0; i < 3; i++){
		menor_mayor.push(prompt("Ingrese un numero"));
	}
	function comparacion(primero, segundo) {
		return primero - segundo; //-1 0 1
	}
	alert(texto + menor_mayor.sort(comparacion));
}
// #7 Realizar un programa que calcule el cuadrado de la suma de dos numeros
function sumaCuadrado(){
	var arreglo = [3, 2];
	var suma = [3, 2].reduce(add, 0);
	function add(a, b) {
		return a + b;
	}
	alert("El resultado de la sumatoria entre los números  " + arreglo[0] + " y " + arreglo[1] + " es " + suma + " y el cuadrado del resultado es " + Math.pow(suma,2));
}