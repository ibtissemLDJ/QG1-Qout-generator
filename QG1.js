let index = 0;
// array of quotes 
let quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs ",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts. ",
    author: "Winston Churchill ",
  },
  {
    quote: "Believe you can and you're halfway there. ",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams. ",
    author: "Eleanor Roosevelt ",
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today..",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "The only person you should try to be better than is the person you were yesterday.",
    author: "Unknown",
  },
  {
    quote:
      "Success is not just about making money. It's about making a difference.",
    author: "Unknown",
  },
  {
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown",
  },

  {
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
  },

  {
    quote:
      "The only way to discover the limits of the possible is to go beyond them into the impossible.",
    author: "Arthur C. Clarke ",
  },

  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },

  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },

  {
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
  },
];
 /*here we define the pointer to the currently displayed quote*/


function displaynextquote() {
 // if we have reached the end of the list ,we revert to the beginning
  if (index >= quotes.length) {
    index = 0;
  }
  //we replace the inside our element with the current quote
  document.getElementById("quotedisplay").innerText = quotes[index].quote;
  document.getElementById("author").innerText =
    "-" + quotes[index].author + "-";
  //we increment the pointer to the next quote adress
  index++;
}
