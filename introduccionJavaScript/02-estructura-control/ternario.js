let n = 8;
let v = "O";
// let r = n > 0 ? "Es positivo" : "Es negativo";
let r =
  v === "a" || v === "A"
    ? `${v} es vocal`
    : v === "e" || v === "E"
    ? `${v} es vocal`
    : v === "i" || v === "I"
    ? `${v} es vocal`
    : v === "o" || v === "O"
    ? `${v} es vocal`
    : v === "u" || v === "U"
    ? `${v} es vocal`
    : `${v} no es vocal`;

console.log(r);
