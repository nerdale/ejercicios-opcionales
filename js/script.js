
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
		arreglo_numeros.push(prompt("Ingrese un número (en total 5)"));
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
		menor_mayor.push(prompt("Ingrese un número"));
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
	var numUno = parseInt(prompt("Ingrese el primer número"));
	var numDos = parseInt(prompt("Ingrese el segundo número"));
	var numTres = parseInt(prompt("Ingrese el tercer número"));
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
	var numUno = parseInt(prompt("Ingrese el primer número"));
	var numDos = parseInt(prompt("Ingrese el segundo número"));
	var resultado = (numUno + numDos);
	alert("El resultado de la sumatoria entre " + numUno + " y " + numDos + " es: " + resultado + " y el cuadrado de este es " + Math.pow(resultado, 2));
}

function digitosFuncion(numero){
	var numero = prompt("Ingrese un digito");
	alert( "La cantidad de digitos es: " + numero.length);
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

function sumarNumerosFuncion(numUno, numDos){
	var numUno = parseInt(prompt("Ingrese primer número"));
	var numDos = parseInt(prompt("Ingrese segundo número"));
	var resultado = numUno + numDos;
	alert("La suma entre " + numUno + " y " + numDos + " da como resultado: " + resultado);
}

function promedioFuncion(numUno, numDos, numTres){
	var numUno = parseInt(prompt("Ingrese primer número"));
	var numDos = parseInt(prompt("Ingrese segundo número"));
	var numTres = parseInt(prompt("Ingrese tercer número"));
	var promedio = (numUno + numDos + numTres)/3;
	alert("El promedio entre " + numUno + ", " + numDos + " y " + numTres + " es: " + promedio.toFixed(2));
}

function areaTrianguloFuncion(base, altura){
	var base = parseInt(prompt("Ingrese la base del triángulo (en cms)"));
	var altura = parseInt(prompt("Ingrese la altura del triángulo (en cms)"));
	var area = base*altura;
	alert("La base del triángulo es: " + area + " cms");
}

function sueldoFuncion(hora, pago){
	var hora = parseInt(prompt("Ingrese las horas que trabaja en promedio diariamente"));
	var pago = parseInt(prompt("Ingrese el precio por hora"));
	var resultadoDiario = hora*pago;
	var resultadoSemanal = resultadoDiario*5;
	alert("El pago por día es $" + resultadoDiario + ", en una semana laboral de lunes a viernes corresponde a un pago total de $" + resultadoSemanal);
}

function telefonoFuncion(minuto, costo){
	var minuto = parseInt(prompt("Ingrese el total de minutos de la llamada"));
	var costo = parseInt(prompt("Ingrese costo del minuto"));
	var resultado = minuto*costo;
	alert("El costo total de la llamada es $" + resultado);
}

function edadFuncion(nombre, edad){
	var nombre = prompt("Hola, ingrese su nombre");
	var edad = parseInt(prompt("Ingrese su edad"));
	alert(nombre + ", no olvides que eres una hermosa persona y has vivido " + edad*365 + " días hasta el momento <3");
}

function areaCirculoFuncion(radio){
	var radio = parseInt(prompt("Ingrese el radio del circulo"));
	var p = 3.14159;
	var area = (Math.pow(radio, 2))*p;
	alert("El área del circulo es " + area);
}

