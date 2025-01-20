// quotes

const quotes = [
  {
    quote: 'If we knew what it was we were doing, it would not be called research, would it?',
    source: 'Albert Einstein',
    tags: ['#humor', '#science', '#curiosity']
  },
  {
    quote: 'We are all one. Only egos, beliefs, and fears separate us.',
    source: 'Nikola Tesla',
    tags: ['#philosophy', '#unity']
  },
  {
    quote: 'If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.',
    source: 'Nikola Tesla',
    tags: ["#science", "#innovation", "#physics"]
  },
  {
    quote: 'Life would be tragic if it weren\'t funny.',
    source: 'Stephen Hawking',
    tags: ['#life']
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
    year: 1986,
    tags: ['#programming']
  },
  {
    quote: 'Simplicity is the soul of efficiency.',
    source: 'Austin Freeman',
    citation: 'The Singing Bone',
    year: 1912
  }

];


// function to get a random quote from the quotes array

function getRandomQuote() {
  let i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}

// function to create a random hex color

function randomColor () {
  const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let hexColor = '';
  for (let i=0; i < 6; i++) {
    let hexValuesIndex = Math.floor(Math.random() * hexValues.length);
    hexColor += hexValues[hexValuesIndex];
  }
  return hexColor;
}

/***
 * printing quotes
 * change background
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
  if(randomQuote.tags) {
    print += `<span class="tags">${randomQuote.tags.join(" ")}</span>`
  }
  print += `</p>`;
  document.getElementById('quote-box').innerHTML = print; 
  document.getElementsByTagName('body')[0].style.background = '#' + randomColor();
}


/***
 * event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * Auto-Refreshed Quotes
 * print a new quote to the page every 10 seconds.
***/

setInterval(printQuote, 10000);

