const responses = [
  "Aww, you're 'not ready'? GOOD. Start anyway.",
  "Perfect is a cult. You’re out.",
  "You’re editing nothing into nothing. MAKE SOMETHING UGLY.",
  "~waiting for clarity~? LOL. Move now.",
  "Your brain is lying. Move anyway.",
  "That’s not fear. That’s inertia wearing a drama wig.",
  "Ready? No? GOOD.",
  "NO MORE THINKY—DO THE THING.",
  "You don’t need more time. You need less fear.",
  "Stuck? Good. Let’s scrape the gears with something messy. GO.",
  "Lost? Perfect. Now invent the map.",
  "Motivation is a scam. Action isn’t.",  
  "Hesitation is sexy in poetry—not in action. Move.",
  "Too much? Cut the head off the task. One bite. Now.",
  "What if you shut up and clicked publish?",
  "Impostor? Nah. You’re just undercover weird royalty. Act like it.",
  "Your brain is running Windows 95. Reboot with a dance move.",
  "Trying is just failing in slow motion. Trip louder, babe.",
  "Nervous? That’s your beast stretching. Let it roar, not whisper.",
  "Oh good, self-doubt. Let’s use it as paint.",
  "You need to disappoint a few expectations instead. Now go!"

];
const patternResponses = [
  { pattern: /not ready|unprepared|need more time/i, response: "Aww, you're 'not ready'? GOOD. Start anyway." },
  { pattern: /still working|reworking|redoing/i, response: "You're editing nothing into nothing. MAKE SOMETHING UGLY." },
  { pattern: /\bidk\b|don’t know|not sure/i, response: "~waiting for clarity~? LOL. Move now." },
  { pattern: /\b(perfect|perfection|flawless)\b/i, response: "Perfect is a cult. You’re out." },
  { pattern: /\bfixing|tweaking|adjusting\b/i, response: "You’re fixing what doesn’t even exist yet. Abort mission. Just launch." },
  { pattern: /\bediting|revising|polishing\b/i, response: "Put the red pen down. Birth first, beautify later." },
  { pattern: /\btime|need time|more time\b/i, response: "You don’t need more time. You need less fear." },
  { pattern: /\bafraid|scared|fearful\b/i, response: "That’s not fear. That’s inertia wearing a drama wig." },
  { pattern: /\bcan'?t|cannot\b/i, response: "‘Can’t’ is just ‘won’t’ with makeup on. Wipe it off." },
  { pattern: /\bstuck|i (feel|am)? stuck|blocked|paralyzed\b/i, response: "Stuck? Good. Let’s scrape the gears with something messy. GO." },
  { pattern: /\blost|directionless\b/, response: "Lost? Perfect. Now invent the map." },
  { pattern: /\bno\s+motivation|unmotivated\b/, response: "Motivation is a scam. Action isn’t." },
  { pattern: /\bhesitat(e|ing|ion)|stalling\b/, response: "Hesitation is sexy in poetry—not in action. Move." },
  { pattern: /\boverwhelmed|too much|can’t cope\b/, response: "Too much? Cut the head off the task. One bite. Now." },
  { pattern: /\bwhat\s+if|maybe\b/, response: "What if you shut up and clicked publish?" },
  { pattern: /\bimpostor|fraud\b/, response: "Impostor? Nah. You’re just undercover weird royalty. Act like it." },
  { pattern: /\boverthinking|ruminating\b/, response: "Your brain is running Windows 95. Reboot with a dance move." },
  { pattern: /\btrying|attempting\b/, response: "Trying is just failing in slow motion. Trip louder, babe." },
  { pattern: /\bnervous|anxious\b/, response: "Nervous? That’s your beast stretching. Let it roar, not whisper." },
  { pattern: /\bself[-\s]?doubt|insecurity\b/, response: "Oh good, self-doubt. Let’s use it as paint." },
  { pattern: /\bneed to|should\b/, response: "You need to disappoint a few expectations instead. Now go!" }
];

const challenges = [
  "🔥 Ruin the First Try Challenge: Just start! 5 minutes. No stopping. GO.",
  "🧠 Reverse the Rule Challenge: Flip the assumption. What if *exactly the opposite* were true?",
  "📤 Ship the Scrap Challenge: Pick something half-finished. Post it. Share it. Use it. Imperfect on purpose."
];

function summonRiff() {
  const input = document.getElementById('userInput').value;
  const output = document.getElementById('riffOutput');
  const lowerInput = input.toLowerCase();

  let matchedResponse = null;

  for (const { pattern, response } of patternResponses) {
    if (pattern.test(lowerInput)) {
      matchedResponse = response;
      break;
    }
  }

  if (matchedResponse) {
    output.innerText = matchedResponse;
  } else {
    output.innerText = "Mm. That’s cute. But I’ve seen messier grocery lists. Try again or just lie to me, I like that.";
  }

  document.getElementById('userInput').value = '';
}


function triggerChallenge() {
  const challenge = challenges[Math.floor(Math.random() * challenges.length)];
  document.getElementById('riffOutput').innerText = challenge;

  document.getElementById('userInput').value = '';
}
window.onload = function () {
  setRandomSplashQuote();
  setTimeout(() => {
    hideSplash();
  }, 2500); // auto hide after 2.5 seconds
};




function hideSplash() {
  const splash = document.getElementById("splash-screen");
  splash.classList.add("fade-out");
}
const splashQuotes = [
  "No more thinky—do the thing.",
  "Perfect is the slowest way to die.",
  "You don’t need more time. You need less fear.",
  "Start ugly. Stay weird. Ship it anyway.",
  "Perfection is a cult. You’re out."
];

function setRandomSplashQuote() {
  const quote = splashQuotes[Math.floor(Math.random() * splashQuotes.length)];
  document.getElementById("splashQuote").innerText = quote;
}