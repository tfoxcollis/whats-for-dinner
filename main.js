var letsCookButton = document.querySelector(".button-submit");
var cookPot = document.querySelector("#cookpot");
var dishDisplay = document.querySelector(".dish-display");
var dishName = document.querySelector(".dish-name");
var displayButton = document.querySelector(".button");
var clearButton = document.querySelector(".clear-button");
var findAllRadio = document.querySelectorAll(".radiodish");
var randomRecipe
var randomSide = sides[getRandomIndex(sides)];
var randomMainDish = mainDish[getRandomIndex(mainDish)];
var randomDessert = dessert[getRandomIndex(dessert)];


letsCookButton.addEventListener("click", () => {
  event.preventDefault()
  var checkedItem = findCheckedItem();
  
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

function setRandomRecipe(checkedItem) {
  if(checkedItem.value === "sides") {
    randomRecipe = randomSide;
  }else if(checkedItem.value === "mainDish") {
    randomRecipe = randomMainDish;
  }else if(checkedItem.value === "dessert") {
    randomRecipe = randomDessert;
  }else if(checkedItem.value === "entire-dish") {
    randomRecipe = `${randomSide}, ${randomMainDish}, ${randomDessert}`
  }
}
