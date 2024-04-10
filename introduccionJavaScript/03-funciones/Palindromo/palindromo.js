const palindromo = (palabra) => {
  palabra = palabra.replace(" ", "");
  palabra = palabra.toLowerCase();

  let palabraInvertida = palabra.split("").reverse().join("");
  if (palabra === palabraInvertida) {
    return true;
  } else {
    return false;
  }
};

let palabra = prompt("Ingrese una palabra!!");

let esPalindromo = palindromo(palabra);

if (esPalindromo) {
  document.write(`La palabra ${palabra} es palindromo`);
} else {
  document.write(`La palabra ${palabra} no es palindromo`);
}
