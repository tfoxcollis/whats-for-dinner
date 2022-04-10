var letsCookButton = document.querySelector(".button-submit");
var cookPot = document.querySelector("#cookpot");
var dishDisplay = document.querySelector(".dish-display");
var dishName = document.querySelector(".dish-name");
var displayButton = document.querySelector(".button");
var clearButton = document.querySelector(".clear-button");
var findAllRadio = document.querySelectorAll(".radiodish");
var randomRecipe

letsCookButton.addEventListener("click", () => {
  event.preventDefault()
  var checkedItem = findCheckedItem();
  if(!findCheckedItem()){
    return alert ("Please make a selection!")
  }
  setRandomRecipe(checkedItem);
  toggleCookPot();
})

clearButton.addEventListener("click", () => {
  window.location.reload();
})


// Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function findCheckedItem(){
  var arr = Array.from(findAllRadio)
  return arr.find(item => item.checked === true)
}

function toggleCookPot() {
  cookPot.style.display = "none";
  dishName.innerHTML = randomRecipe;
  dishDisplay.style.display = "flex";
  displayButton.style.display = "flex";
}

function randomSide() {
  return sides[getRandomIndex(sides)]
}

function randomMainDish() {
  return mainDish[getRandomIndex(mainDish)];
}

function randomDessert() {
  return dessert[getRandomIndex(dessert)];
}

function setRandomRecipe(checkedItem) {
  if(checkedItem.value === "sides") {
    randomRecipe = randomSide();
  }else if(checkedItem.value === "mainDish") {
    randomRecipe = randomMainDish();
  }else if(checkedItem.value === "dessert") {
    randomRecipe = randomDessert();
  }else if(checkedItem.value === "entire-dish") {
    randomRecipe = `${randomSide()}, ${randomMainDish()}, ${randomDessert()}`
  }
}
