function vrziKocke() {
  //Naključna generatorja za št. med 1-6

  var randomNumber1 = Math.random();
  randomNumber1 = Math.floor(randomNumber1 * 6 + 1);

  var randomNumber2 = Math.random();
  randomNumber2 = Math.floor(randomNumber2 * 6 + 1);

  //Spremeniš številko slike, glede na naključno generirano številko spremenljivke

  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  //Določiš kdo zmaga in spremeniš h1 temu ustrezno

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML =
      "Zmagal je igralec 1! <i class='fas fa-flag'></i>";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML =
      "Zmagal je igralec 2! <i class='fas fa-flag'></i>";
  } else {
    document.querySelector("h1").innerHTML = "Rezultat je neodločen.";
  }
}

function ponastavi() {
    document
    .querySelector(".img1")
    .setAttribute("src", "images/dice1.png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice1.png");
    document.querySelector("h1").innerHTML = "Kdo bo zmagovalec?";
}

vrziKocke();