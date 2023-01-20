
const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
    img = "<img src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}<b>.</p>`;
	return [img,nombre,modelo,precio];
}

let div = document.createElement("DIV");
div.classList.Add("flex-item");


for (i = 0; i < 20; i++) {
    let modeloRandom = Math.random()*10000;
    let precioRandom = Math.random()*10+30;
	let llave = crearLlave(`llave${i}`,`modelo ${modeloRandom}`,`precio: ${precioRandom}`);+
	contenedor.innerHTML += llave;
}