//minificamos para el area de produccion.
const myModule = (() => {
  "use strict";
  let e = document.querySelector("#btnPerimCuadrado"),
    t = document.querySelector("#btnAreaCuadrado"),
    l = document.querySelector("#btnPerimTriangulo"),
    r = document.querySelector("#btnAreaTriangulo"),
    n = document.querySelector("#btnDiametroCirculo"),
    i = document.querySelector("#btnPerimCirculo"),
    d = document.querySelector("#btnAreaCirculo"),
    a = (e) => 4 * e,
    u = (e) => e * e,
    c = document.getElementById("result");
  e.addEventListener("click", () => {
    let e = Number(document.getElementById("inputSide").value),
      t = `El perimetro del cuadrado es: ${a(e)} cm`;
    c.innerText = t;
  }),
    t.addEventListener("click", () => {
      let e = Number(document.getElementById("inputSide").value),
        t = `El Area del cuadrado es: ${u(e)} cm^2`;
      c.innerText = t;
    });
  let o = (e, t, l) => e + t + l,
    m = (e, t) => e * t;
  l.addEventListener("click", () => {
    let e = document.getElementById("inputSideTriangulo1"),
      t = document.getElementById("inputSideTriangulo2"),
      l = document.getElementById("inputSideTriangulo3"),
      r = Number(e.value),
      n = Number(t.value),
      i = Number(l.value),
      d = `El perimetro del triangulo es ${o(r, n, i)} cm`;
    c.innerText = d;
  }),
    r.addEventListener("click", () => {
      let e = document.getElementById("base"),
        t = document.getElementById("altura"),
        l = Number(e.value),
        r = Number(t.value),
        n = `El area del triangulo es ${m(l, r)} cm^2`;
      c.innerText = n;
    });
  let E = (e) => 2 * e,
    s = (e) => 3.14 * (e * e),
    y = (e) => 3.14 * E(e);
  n.addEventListener("click", () => {
    let e = Number(document.getElementById("radio").value),
      t = `El diametro es: ${E(e)} cm`;
    c.innerText = t;
  }),
    d.addEventListener("click", () => {
      let e = Number(document.getElementById("radio").value),
        t = `El area del circulo es: ${s(e)} cm^2`;
      c.innerText = t;
    }),
    i.addEventListener("click", () => {
      let e = Number(document.getElementById("radio").value),
        t = `El perimetro del circulo es: ${y(e)} cm`;
      c.innerText = t;
    });
})();
