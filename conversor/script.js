// Valor actual de cada dolar en Argentina = $1050ars
const valorEnPesos = () => {
  const nombreUsuario = prompt("Ingrese su nombre:");
  let valorEnDolar = parseInt(prompt("Ingrese la cantidad de dolares que posee:"));
  const valorEnPesos = 1050;

  // En este caso, calcula los dolares ingresados * 1050ars que es el valor actual de cada usd.
  alert(`${nombreUsuario}, usted posee $${valorEnPesos * valorEnDolar} pesos.`);
};

const temperaturas = () => {
    const nombreUsuario = prompt("Ingrese su nombre:");
    const celsius = parseInt(prompt("Ingrese la cantidad de grados celsius actuales:"));

    const farenheit = (celsius * 9/5 + 32).toFixed(2);
    const kelvin = (celsius + 273.15).toFixed(2);

    alert(`${nombreUsuario}, aquí hemos realizado la conversión:`);
    alert(`${celsius}° Celsius`);
    alert(`${farenheit}° Farenheit`);
    alert(`${kelvin}° kelvin`);
  };

  const bitcoin = () => {
    const nombreUsuario = prompt("Ingrese su nombre:");
    const bitcoins = parseInt(prompt("Ingrese la cantidad de bitcoins que posee:"));
    const dolar = parseFloat(30.388,80);

    const valorEnDolar = (dolar * bitcoins);

    alert(`${nombreUsuario}, aquí hemos realizado la conversión:`);
    alert(`Usted posee ${valorEnDolar} Dolares`);
  };