// 1. Atskiri elementai
//     a. Tamsiai žaliai nuspalvinti h1 tagą;
document.querySelector("h1").style.color = "darkgreen";

//     b. Tagui i pridėti klasę small;
document.querySelector("i").classList.add("small");

//     c. Iš tago h1 pašalinti klasę main;
document.querySelector("h2").classList.remove("main");

//     d. Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
document.querySelector("h1 + h2").classList.add("first");
document.querySelector("h1 + h2").classList.remove("main");

//     e. Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
document.querySelector("h2 > span:first-of-type").style.fontSize = "10px";
document.querySelector("h2 > span:first-of-type").style.color = "grey";

// 2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
//     a. Suskaičiuoti kiek yra h2 tagų;
console.log("kiek h2: ", document.querySelectorAll("h2").length);

//     b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
console.log(
  "kiek h2 be pirmos klases: ",
  document.querySelectorAll("h2").length -
    document.querySelectorAll("h2.first").length
);

//     c. Visus h2 tagus nuspalvinti šviesiai mėlynai
document.querySelectorAll("h2").forEach((e) => (e.style.color = "lightblue"));

//     d. Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
document
  .querySelectorAll("div.prices > h2")
  .forEach((e) => e.classList.add("price-tag"));
//     e. Pabraukti visus tagus su klase new;
document
  .querySelectorAll(".new")
  .forEach((e) => (e.style.textDecoration = "underline"));
//     f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
console.log("kiek gyvunu kategoriju: ", document.querySelectorAll("ul").length);
const zirafos = [];
document.querySelectorAll("li").forEach((e) => {
  if (e.textContent.search("Žirafa") >= 0) zirafos.push(e.textContent);
});
console.log("kiek zirafu: ", zirafos.length);
console.log("Kokios zirafos:");
console.log(zirafos);
//     g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
document.querySelectorAll("ul").forEach((e) => {
  e.style.border = "1px solid red";
  e.style.padding = "15px 50px";
});
//     h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
console.log("kiek nauju gyvenu: ", document.querySelectorAll(".new").length);
//     i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
console.log("kiek nauju kievienoje kategorijoje: ");
document.querySelectorAll("ul").forEach((e) => {
  const m = [];
  console.log(e.id.toUpperCase());

  e.querySelectorAll(".new").forEach((el) => {
    m.push(el.textContent);
    console.log(el.textContent);
  });
  console.log("viso: ", m.length);
});
// 3. Elementų events
//     a. Padaryti tai ką liepia mygtukai Header1 sekcijoje;
document.getElementById("h1-color").addEventListener("click", () => {
  document.querySelector("h1").style.color = "lightgreen";
});
document.getElementById("h1-font").addEventListener("click", () => {
  document.querySelector("h1").style.fontSize = "10px";
});
//     b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
const i = document.querySelector("i");
i.addEventListener("click", () => (i.style.fontWeight = "bold"));
//     c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
let prices = document.querySelector(".prices");

let count = 0;

prices.addEventListener("click", function () {
  count++;
  if (count % 2 === 1) {
    prices.style.backgroundColor = "grey";
  } else {
    prices.style.backgroundColor = "white";
  }
});

//     d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
let contacts = document.querySelector("#contacts:not(b)");
contacts.addEventListener("click", function () {
  if (colorCount > 0) {
    colorCount = 0;
  } else {
    contacts.style.color = "orange";
  }
});

//     e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
let bigger = document.querySelector("#contacts > u");

bigger.addEventListener("click", function () {
  contacts.style.fontSize = "20px";
});

//     f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
let x = document.querySelector("#contacts > b");
let colorCount = 0;

x.addEventListener("click", function () {
  colorCount++;
  contacts.style.color = "black";
  contacts.style.fontSize = null;
});
//     g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;

// 4. Elementų grupių events
//     a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event

//     b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.

//     c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;

// 5. Dinaminis elementų kūrimas (su createElement)
//     a. Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;

//     b. Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;

//     c. Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like

//     d. Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta
