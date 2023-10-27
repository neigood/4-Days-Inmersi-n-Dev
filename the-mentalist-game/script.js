let random = Math.floor(Math.random() * (101 - 1) + 1);
let counter = 0;
let maxAttempts = 5;
function mentalist() {
  const newDiv = document.getElementById("newDiv");
  let number = document.getElementById("number").value;
  console.log(random);

  if (!number) {
    alert(`Hey! We need you to insert a number!`);
    return; // Cortamos la ejecución para que no cuente como intento
  } else if (number < random) {
    alert(`the number ${number} es menor 🔽 que el numero secreto`);
  } else if (number > random) {
    alert(`the number ${number} es mayor 🔼 que el numero secreto`);
  } else {
    let num = document.createElement("p");
    let img = document.createElement("img");
    img.id = "celebrate";
    img.src = "https://i.gifer.com/4M57.gif";
    num.innerText = `Eres un verdadero Mentalista, el número secreto era ${random} 😎!`;
    newDiv.appendChild(num);
    document.body.appendChild(img);
  }

  counter++;

  if (counter > maxAttempts) {
    alert(
      `Lo siento, no tiene más intentos, el número secreto era ${random} 😭`
    );
  }
}