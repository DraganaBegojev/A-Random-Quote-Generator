/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'If we knew what it was we were doing, it would not be called research, would it?',
    source: 'Albert Einstein'
  },
  {
    quote: 'We are all one. Only egos, beliefs, and fears separate us.',
    source: 'Nikola Tesla'
  },
  {
    quote: 'If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.',
    source: 'Nikola Tesla'
  },
  {
    quote: 'Life would be tragic if it weren\'t funny.',
    source: 'Stephen Hawking'
  },
  {
    quote: 'The only thing we have to believe in is the unimaginable.',
    source: 'Hilma af Klint'
  },
  {
    quote: 'Even the smallest stars shine brightly in the darkest night.',
    source: 'Knut Lundmark'
  },
  {
    quote: 'Somewhere, something incredible is waiting to be known.',
    source: 'Carl Sagan',
    citation: 'Cosmos',
    year: 1980
  },
  {
    quote: 'Good ideas are always crazy until they\'re not.',
    source: 'Ashlee Vance',
    citation: 'Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future',
    year: 2015
  },
  {
    quote: 'First, solve the problem. Then, write the code.',
    source: 'John Johnson',
    citation: 'Programming Pearls',
    year: 1986
  },
  {
    quote: 'Simplicity is the soul of efficiency.',
    source: 'Austin Freeman',
    citation: 'The Singing Bone',
    year: 1912
  }

];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}


/***
 * `printQuote` function
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let print = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;
  if (randomQuote.citation) {
    print += `<span class="citation">${randomQuote.citation}</span>`
  }
  if(randomQuote.year) {
    print += `<span class="year">${randomQuote.year}</span>`
  }
  print += `</p>`;
  document.getElementById('quote-box').innerHTML = print; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);