var radioSide = document.querySelector("#side");
var radioMainDish = document.querySelector("#main");
var radioDessert = document.querySelector("#dessert");
var radioEntireDish = document.querySelector("#entire-dish");
var letsCookButton = document.querySelector(".button-submit");
var cookPot = document.querySelector("#cookpot");
var dishDisplay = document.querySelector(".dish-display");
var dishName = document.querySelector(".dish-name");
var displayButton = document.querySelector(".button");
var clearButton = document.querySelector(".clear-button");
var findAllRadio = document.querySelectorAll(".radiodish");
var randomRecipe
var sides = ["Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"]

var mainDish = ["Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza",
]

var dessert = ["Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs"]
var randomSide = sides[getRandomIndex(sides)];
var randomMainDish = mainDish[getRandomIndex(mainDish)];
var randomDessert = dessert[getRandomIndex(dessert)];
letsCookButton.addEventListener("click", () => {
  event.preventDefault()
  var checkedItem = findCheckedItem();
  setRandomRecipe(checkedItem);
  toggleCookPot();

  if(radioEntireDish.checked === true){
    cookPot.style.display = "none";
    dishName.innerHTML = `${randomSide}, ${randomMainDish}, ${randomDessert}`
    dishDisplay.style.display = "flex";
  }
  displayButton.style.display = "flex";
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
}

function setRandomRecipe(checkedItem) {
  var randomRecipe = randomSide;
  var randomRecipe = randomMainDish;
  var randomRecipe = randomDessert;
  if(checkedItem.value === "sides") {
    var randomRecipe = randomSide;
  }else if(checkedItem.value === "mainDish") {
    var randomRecipe = randomMainDish;
  }else if(checkItem.value === "dessert") {
    var randomRecipe = randomDessert;
  }
}
