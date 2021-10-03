const quotes = [
    {
      quote: "When you go through hardships and decide not to surrender, that is strength.",
      author: "Arnold Schwarzenegger",
    },
    {
      quote: "Tough times never last, but tough people do.",
      author: "Robert H. Schuller",
    },
    {
      quote:
        "I’ve failed over and over and over again in my life and that is why I succeed.",
      author: "Michael Jordan",
    },
    {
      quote: "There are better starters than me but I’m a strong finisher.",
      author: "Usain Bolt",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
      author: "Martin Luther King, Jr",
    },
    {
      quote: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
      author: "Estée Lauder",
    },
    {
      quote: "Action is the foundational key to all success.",
      author: "Pablo Picasso",
    },
    {
      quote: "It is your determination and persistence that will make you a successful person.",
      author: "Kenneth J Hutchins",
    },
    {
      quote: "Just Do It.",
      author: "Phil Knight",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;