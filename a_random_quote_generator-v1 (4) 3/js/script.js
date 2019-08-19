/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// 5 arrays that hold my quotes

var quotes = [
  {
    quote: "Nothing is impossible for the word itself says , i'm possible .",
    source: "Audrey Hepburn",
    tags: ["Grit", "Determination", "Success"]
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    tags: ["Just Do It", "Sport motivation"]
  },
  {
    quote: "Fall down, get back up.",
    source: "Japanese Proverb",
    tags: ["Determination", "Grit"]
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that do not work.",
    source: "Thomas A. Edison",
    citation: "quotesfast.com",
    tags: ["Perserverance", "Innovation"]
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    year: "1993", 
    tags: ["Hope", "Politics"]
  }
];

console.log(quotes);



// This function is named getRandomQuote and its job is to pull random quotes from the array

function getRandomQuote () {
    randomQuote = Math.floor(Math.random()* quotes.length)
    return quotes[randomQuote]

};

// this function will print my quotes to the webpage 

function printQuote() {
  let result = getRandomQuote();
  let message = "   ";

  message +=
    "<p class=  'quote'>"  +
    result.quote +
    "</p>  <p class=  'tags'>"   +
    result.tags
    "</p> <p class=  'year'>"  +
    result.year

    
    " ";

  if (result.tags) {
    message += "<span class='tags'>" + result.tags + "</span>" + "</p>";
  }

  if (result.source) {
    message += "<span class='source'>" + result.source + "</span>";
  }
  if (result.year) {
    message += "<span class='year'>" + result.year + "</span>" + "</p>";
  }

  message += "</p>";

  document.getElementById("quote-box").innerHTML = message;
}

// this function is used to display a different background color randomly 

function getRandomColor() {
let red = Math.floor(Math.random() * 256);
let purple = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

var color = "rgb(" + red + "," + green + "," + blue + ")";
return color;
}

// This code changes the background color after a certain amount of time has passed //

setInterval(printQuote, 10000)
setInterval(diffBackground, 10000)

// This code creates a different background color- and it does it randomly //

function diffBackground() {
  document.body.style.backgroundColor = getRandomColor();
  document.getElementById('loadQuote').style.backgroundColor = getRandomColor();
}







// this code will randomly change the color of the button 
document.getElementById('loadQuote').addEventListener("click", diffBackground, false);


// 


document.getElementById('loadQuote').addEventListener("click", printQuote, false) 