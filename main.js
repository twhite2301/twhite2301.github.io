const vragen = [
  "Noem een stad",
  "Noem een beroemd persoon",
  "Noem een liedje",
  "Noem een groente of fruit",
  "Noem een film",
  "Noem een coffeeshop",
  "Noem een dier",
  "Noem iets wat drijft",
  "Noem iets waaraan je dood gaat als het van 10 meter op je hoofd valt.",
  "Noem een supermarkt product",
  "Noem een soort drugs",
  "Noem een plaats in Nederland",
  "Noem iets wat je kan vinden in de natuur",
  "Noem iets wat je pijn doet",
  "Noem een kledingmerk",
  "Noem iets wat in je nektas zit",
  "Noem een bekende Nederlander",
  "Noem iets waar je op kan slapen",
  "Noem een boek",
  "Noem een merk",
  "Noem een hobby",
  "Noem een bedrijf",
  "Noem een straatnaam",
  "Ga verder met de letter: G",
  "Ga verder met de letter: Z",
  "Ga verder met de letter: L",
  "Ga verder met de letter: R",
  "Kies een nieuw letter voor de volgende speler",
  "Noem een huisdier",
  "Noem iets waar je uit kan roken",
  "Noem iets te eten",
  "Noem iets wat je kan bestellen in een restaurant",
  "Noem een ziekte",
  "Noem een kleur",
  "Noem iets wat je bij de slager kan halen",
  "Noem een youtube kanaal",
  "Noem iets waarmee je een moord kan plegen"
];

let vorigeVragen = [];
let timerInterval = null;
const countdownTime = 30; // Starttijd in seconden
const intervalTime = 1000; // 1 seconde interval

const kiesRandomVraag = () => {
  if (vorigeVragen.length === vragen.length) vorigeVragen = [];
  let randomVraag;
  do {
      const randomIndex = Math.floor(Math.random() * vragen.length);
      randomVraag = vragen[randomIndex];
  } while (vorigeVragen.includes(randomVraag));
  vorigeVragen.push(randomVraag);
  return randomVraag;
};

const kiesRandomLetter = () => {
  const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return alfabet[Math.floor(Math.random() * alfabet.length)];
};

const startCountdown = () => {
  // Stop bestaande timer als die loopt
  if (timerInterval) clearInterval(timerInterval);

  let countdown = countdownTime;
  const textContainer = document.getElementById("textContainer");
  const mediaContainer = document.getElementById("mediaContainer");
  
  // Nieuwe vraag met random letter tonen en afbeelding verbergen
  const nieuweVraag = kiesRandomVraag();
  const letter = kiesRandomLetter();
  textContainer.innerHTML = `<p>${nieuweVraag}<br>Countdown: ${countdown}</p>`;
  mediaContainer.innerHTML = "";

  // Start nieuwe countdown
  timerInterval = setInterval(() => {
      countdown--;
      textContainer.innerHTML = `<p>${nieuweVraag}<br>Countdown: ${countdown}</p>`;
      
      if (countdown < 0) {
          clearInterval(timerInterval);
          textContainer.innerHTML = "Jij gaat naar Jilla!"; // Tekst verbergen
          mediaContainer.innerHTML = `<img id="mediaContainer" src="monopolie.jpeg" alt="de tijd is om!">`;
      }
  }, intervalTime);
};

const setupEventListeners = () => {
  const button = document.getElementById("nextQ");
  if (button) button.addEventListener("click", startCountdown);
};

const init = () => {
  const textContainer = document.getElementById("textContainer");
  const letter = kiesRandomLetter();
  textContainer.innerHTML = `<p>Houd uw zjuen in de aanslag!<br>Eerste letter: ${letter}`;
  setupEventListeners();
};

init();
