function codificar() {
	// Obter o valor do input
	var texto = document.getElementById("texto").value;

	// Deslocar as letras
	var deslocado = "";
	for (var i = 0; i < texto.length; i++) {
		var letra = texto.charAt(i);
		if (letra.match(/[a-zA-Z]/)) {
			deslocado += String.fromCharCode(letra.charCodeAt(0) + 3);
		} else {
			deslocado += letra;
		}
	}
	
	// Inverter a linha
	var invertido = deslocado.split("").reverse().join("");
	
	// Deslocar os caracteres da metade em diante
	var metade = Math.floor(invertido.length / 2);
	var final = "";
	for (var i = 0; i < invertido.length; i++) {
		if (i >= metade) {
			final += String.fromCharCode(invertido.charCodeAt(i) - 1);
		} else {
			final += invertido.charAt(i);
		}
	}
	
	// Atualizar o valor do output
	document.getElementById("output").value = final;
}
