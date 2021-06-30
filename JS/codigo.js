let colour = document.getElementById('primerovenida')

let load = () => {
    document.getElementById('primerovenida').classList.add('unovenida');
    document.getElementById('segundovenida').classList.add('dosvenida');
    document.getElementById('spinprincipalvenida').classList.add('spinvenida');
    document.getElementById('spinunovenida').classList.add('spin1venida');
    document.getElementById('spindosvenida').classList.add('spin2venida');
    document.getElementById('spintresvenida').classList.add('spin3venida');
}

load()

function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
	colour.style.background = color;
}

generarNuevoColor()

