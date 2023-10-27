/*
Desafío AluraFlix
1) Reemplazar bucle FOR por WHILE.
2) Colocar más elementos al ARRAY mediante PUSH.
3) Determinar que el enlace de la imagen termine con ".jpg" o ".jpeg".
4) Colocar el nombre de la película debajo de la imagen respectiva.
5) Personalizar AluraFlix.
*/

var listaPeliculas = [
  "https://i.pinimg.com/474x/cc/63/68/cc63687ef2e93d5f58fdcf6c91209b5d.jpg",
  "https://i.pinimg.com/originals/f1/86/5c/f1865cb86fd8c00cc1b8c01d1f4c5686.jpg",
  "https://i.pinimg.com/originals/bb/f1/59/bbf1595526d6979ed70b27bd686a9c96.jpg",
  "https://i.pinimg.com/originals/dd/91/ba/dd91ba1fb2cb312019ba646f31bbd32a.jpg",
  "https://i.pinimg.com/originals/11/78/69/1178691768fe49fa15327cd24ec2ae0e.jpg",
  "https://i.pinimg.com/originals/d8/4c/8b/d84c8bf192478e8541c1c5feb4d71e8d.jpg",
  "https://i.pinimg.com/736x/ef/13/8f/ef138fb0d59a9feff847a7ff78ae6211.jpg",
  "https://i.pinimg.com/originals/23/07/9c/23079c06b9c6fe3b47901043ea603687.png",
  "https://www.4gamer.net/games/194/G019403/20200316091/SS/004.jpg"
];

listaPeliculas.push(
  "https://i.pinimg.com/736x/6b/1a/b9/6b1ab98500445a8053ac9bf7f7331254.jpg",
  "https://prtimes.jp/i/6324/851/resize/d6324-851-672ebcad981cddc33d1c-2.jpg",
  "https://media.giphy.com/media/12IS8ZMgRw2aLC/giphy.gif"
);
// La última imagen se colocó con un formato distinto para ver su resultado.

var nombrePeliculas = [
  "GON FREECS",
  "KILUA ZOLDYCK",
  "KURAPICA KURTA",
  "ILLUMI ZOLDICK",
  "ZENO ZOLDICK",
  "SILVA ZOLDICK",
  "NANIKA ZOLDICK",
  "HISOKA MOROW",
  "ISAAC NETERO"
];

nombrePeliculas.push(
  "SHOOT MCMAHON",
  "MOREL MACKERNASEY",
  "Star Wars"
);

document.write('<div class="container_todosFilmes">');

//Desafío 1 - Convertir for en while
var i = 0;
while (i < listaPeliculas.length) {
  if (
    listaPeliculas[i].endsWith("jpg") ||
    listaPeliculas[i].endsWith("jpeg") ||
    listaPeliculas[i].endsWith("png")
  ) {
    document.write('<div class="container_filme">');
    document.write('<div class="imagenPeli">');
    document.write("<img src=" + listaPeliculas[i] + ">");
    document.write("</div>");
    document.write("<p>" + nombrePeliculas[i] + "</p>");
    document.write("</div>");
  } else {
    document.write(
      "<p>La imagen " +
        i +
        "<br>!ALERTA! no se leyó porque<br>no es un archivo<br>jpeg, jpg o png</p>"
    );
  }
  i++;
}
document.write("</div>");