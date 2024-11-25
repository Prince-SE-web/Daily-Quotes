const quotes = [
  {quote: '"In three words I can sum up everything I have learned about life: it goes on."', author: "Robert Frost"},
  {quote: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche"},
  {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
  {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill"},
  {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
  {quote: "If friends are money, I will have four quarters rather than 100 pennies", author: "Someone from YouTube"},
  {quote:"I have not failed. I've just found 10,000 ways that won't work.",author:"Thomas Edison"},
  {quote:"I find out what the world needs. Then I go ahead and try to invent it.",author:"Thomas Edison"},
  {quote:"The important thing is not to stop questioning. Curiosity has its own reason for existing.",author:"Albert Einstein"},
  {quote:"Try not to become a man of success, but rather try to become a man of value.",author:"Albert Einstein"}
];

const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const quote1 = document.getElementById("quotes");
const authorsName = document.querySelector("#author");
const random = document.getElementById("btn");

let currentQuote = 0;
let interval = null;
//Event Listeners
rightBtn.addEventListener("click",()=>{
  currentQuote < quotes.length - 1 ? ++currentQuote: currentQuote=0;
  changeQuoteAuthor();
});

leftBtn.addEventListener("click",()=>{
  currentQuote > 0 ? --currentQuote : currentQuote = quotes.length -1;
  changeQuoteAuthor();
});

random.addEventListener("click",()=>{
  if(!interval){
    interval = setInterval(randomQuote,5000);
    random.innerText = "Pause";
    random.style.background = "red";
    random.style.borderColor = "red";
  }
  else{
    clearInterval(interval);
    interval = null;
    random.innerText = 'Random quote';
    random.style.background = "rgb(39,79,148)";
    random.style.borderColor = "rgb(39,79,148)";
    random.style.color = "white";
  }
  })



//This function changes the quotes and the author name using DOM manipulation
function changeQuoteAuthor(){
  quote1.innerHTML = quotes[currentQuote].quote;
  authorsName.innerHTML = `- ${quotes[currentQuote].author}`;
}

//get random number between specific range
function getRandom(num){
  return Math.floor(Math.random()*num);
}

//this function get the random number and store it in currentQuote variable
//then it changes the quote and authors name using DOM
let previousquote = -1;
function randomQuote(){
  do {
    currentQuote = getRandom(quotes.length);
  } while (currentQuote === previousquote); 
  previousquote = currentQuote;
  changeQuoteAuthor();
}

