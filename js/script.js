
// //ARREGLOS
function numeroMenor(){
	var ar_menor=[];
	var numeroMenor = Math.min.apply(null, ar_menor);
	for (var i = 0; i <3; i++){
		ar_menor.push(prompt("Ingrese un número"));
	}
	alert("el número menor entre " + ar_menor[0] + ", " + ar_menor[1] + " y " + ar_menor[2]+ " es " + Math.min.apply(null, ar_menor));
}

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
	alert("Los números ingresados son: " + arreglo_numeros + " y los números pares son: " + pares);
}

function menorMayorArreglo(){
	var menor_mayor = [];
	var texto = "Los números ordenados de menor a mayor es ";
	for(var i = 0; i < 3; i++){
		menor_mayor.push(prompt("Ingrese un numero"));
	}
	function comparacion(primero, segundo) {
		return primero - segundo; //-1 0 1
	}
	alert(texto + menor_mayor.sort(comparacion));
}

function sumaCuadrado(){
	var arreglo = [3, 2];
	var suma = [3, 2].reduce(suma, 0);
	function suma(elementoUno, elementoDos) {
		return elementoUno + elementoDos;
	}
	alert("El resultado de la sumatoria entre los números  " + arreglo[0] + " y " + arreglo[1] + " es " + suma + " y el cuadrado del resultado es " + Math.pow(suma,2));
}

/*function sumaCuadrado(){
	var numeros = [3,2];
	var sum = 0;
	for(var i = 0; i < numeros.length; i++){
		sum += numeros[i]
	}
	alert("La suma entre los números " + numeros[0] + " y " + numeros[1] + " es: " + sum +  " y el cuadrado del resultado es " + Math.pow(sum,2));
}*/

//FUNCIONES

function numeroMenorFuncion(numUno, numDos, numTres){
	var numUno = parseInt(prompt("Ingrese el primer numero"));
	var numDos = parseInt(prompt("Ingrese el segundo numero"));
	var numTres = parseInt(prompt("Ingrese el tercer numero"));
	var numeroMenor = Math.min(numUno, numDos, numTres);
	alert("El número menor entre : " + numUno + "," + numDos + "y " + numTres + " es: " + numeroMenor);
}

function esParFuncion(num){
	var num = parseInt(prompt("Ingrese un número"));
	var resultado = "El número " + num + " ";
	if (num % 2 === 0){
		resultado += "es par";
	} else {
		resultado += "es impar";		
	}
	alert(resultado);
}

function menorMayorFuncion(a, b, c){
	var a = prompt("Ingrese primer número");
	var b = prompt("Ingrese segundo número");
	var c = prompt("Ingrese tercer número");
	var resultado = "El orden de menor a mayor ";
	if(a < b && a < c && b < c){
		resultado += "es: " + a + ", " + b +  ", " + c;
	}else if (a < b && a < c && b > c){
		resultado += "es: " + a +  ", " + c +  ", " + b;
	}else if (b < a && b < c && c < a){
		resultado += "es: " + b +  ", " + c +  ", " + a;
	}else if (c < a && c < b && a > b){
		resultado += "es: " + c +  ", " + b +  ", " + a;
	}else if ( c < b && c < a && b > a){
		resultado += "es: " + c +  ", " + a +  ", " + b;
	}
	alert(resultado);
}

function minMayFuncion(palabra){
	var palabra = prompt("Ingrese la palabra que quiere verificar");
	var resultado ="El texto " + palabra + " ";
	if (palabra === palabra.toUpperCase()){
		resultado += "está compuesto por mayúsculas";
	} else if (palabra === palabra.toLowerCase()){
		resultado += "está compuesto por minúsculas";
	} else {
		resultado += "está compuesto por mayúsculas y minúsculas";
	}
	alert(resultado);
}

function sumaCuadradoFuncion(numUno, numDos){
	var numUno = parseInt(prompt("Ingrese el primer numero"));
	var numDos = parseInt(prompt("Ingrese el segundo numero"));
	var resultado = (numUno + numDos);
	alert("El resultado de la sumatoria entre " + numUno + " y " + numDos + " es: " + resultado + " y el cuadrado de este es " + Math.pow(resultado, 2));
}

function digitosFuncion(numero){
	var numero = parseInt(prompt("Ingrese un digito"));
	var digitoString = numero.toString();
	var cantidadDigitos = 0;	
	for (var i = 0; i < digitoString.length; ++i){
		++cantidadDigitos;
	}
	alert( "La cantidad de digitos es: " + cantidadDigitos);
}

function palindromoFuncion(palabra){
	var palabra = prompt("ingrese una palabra");
	var resultado = "La palabra " + palabra;
	var especiales = /[^A-Za-z0-9]/g;
	var palabra = palabra.toLowerCase().replace(especiales, ""); //le quito espacios en blanco y caract. especiales
	if(palabra !== palabra.split("").reverse().join("")){ //compara si la palabra inicial es distinta a la palabra separada(split), dada vuelta(reverse) y unida nuevamente(join)
		resultado += " no es palindromo";
	}else{
		resultado +=  " es palindromo";
	}
	alert(resultado);
}

function multiplosFuncion(numero){
	var numero = parseInt(prompt("Ingrese un número"));
	var resultado = "Los múltiplos de " + numero + " son: ";
	for ( var i = 1; i < 11; ++i){
		var multiplos = numero*i;
		resultado += " " + multiplos.toString();
	}
	alert(resultado);
}


