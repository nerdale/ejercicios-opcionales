//ARREGLOS
/* #2 Escribir el codigo de una funcion a la que se pasa como parametro un numero entero 
y devuelve como resultado un cadena de texto que indica si el numero es par o impar 
mostrar por pantalla el resultado devuelto por la funcion*/
function numerosPares() {
	var arreglo = [];
	var primerNum = prompt("Indique el primer numero del arreglo");
	var ultimoNum = prompt("Indique el ultimo numero del arreglo");
	for (var i = primerNum; i <= ultimoNum; i++) {
			if(i % 2=== 0){
				arreglo.push(i);
			}
	}
	return alert("Los numeros pares entre " + primerNum + " y " + ultimoNum + " son: " + arreglo);
}
/* #3 Realizar una función a la cual le envie tres enteros y los muestre ordenados
de menor  a mayor */
function menorMayorArreglo(){
	var arreglo = [];
	var texto = "Los números ordenados de menor a mayor es ";
	for(var i = 0; i < 3; i++){
		arreglo.push(prompt("Ingrese un numero"));
	}
	function comparacion(primero, segundo) {
		return primero - segundo;
	}
	alert(texto + arreglo.sort(comparacion));
}
// #7 Realizar un programa que calcule el cuadrado de la suma de dos numeros
function sumaCuadrado(){
	var arreglo = [3, 2];
	var suma = [3, 2].reduce(add, 0);
	function add(a, b) {
		return a + b;
	}
	alert("El resultado de la sumatoria entre los números  " + arreglo[0] + " y " + arreglo[1] + " es " + suma + " y el cuadrado del resultado es " + suma*suma);
}