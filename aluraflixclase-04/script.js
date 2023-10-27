var listadoDePeliculas = [];

function agregarPelicula() {
  // Obtén el valor del input con id "pelicula"
  var urlPeliFavorita = document.getElementById("pelicula").value;

  if (urlPeliFavorita.endsWith(".jpg")) {
    var infoPelicula = {
      imagen: urlPeliFavorita,
      nombre: prompt("Ingresa el Nombre de la Pelicula"),
      trailer: prompt("Ingrese el Trailer de la Pelicula")
    };
    listadoDePeliculas.push(infoPelicula);

    document.getElementById("pelicula").value = "";

    verPeliculas();
  } else {
    alert("El enlace debe terminar con jpg");
    document.getElementById("pelicula").value = "";
  }
}

function verPeliculas() {
  const listaPeliculas = document.getElementById("listaPeliculas");

  listadoDePeliculas.forEach((infoPelicula, index) => {
    const divPelicula = document.createElement("div");
    divPelicula.classList.add("infoPelicula");

    const enlaceImagen = document.createElement("a");
    enlaceImagen.href = infoPelicula.trailer;
    enlaceImagen.target = "_blank";

    const imagen = document.createElement("img");
    imagen.src = infoPelicula.imagen;
    imagen.alt = infoPelicula.nombre;

    const nombre = document.createElement("p");
    nombre.textContent = infoPelicula.nombre;
    nombre.style.color = "#ffffff";

    divPelicula.appendChild(enlaceImagen);
    enlaceImagen.appendChild(imagen);
    divPelicula.appendChild(nombre);

    listaPeliculas.appendChild(divPelicula);
  });
}
verPeliculas();