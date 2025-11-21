// Breathing Exercise
document.getElementById("breatheBtn").addEventListener("click", function () {
    const text = document.getElementById("breatheText");
    text.innerText = "Inhale...";
    setTimeout(() => text.innerText = "Hold...", 2000);
    setTimeout(() => text.innerText = "Exhale...", 4000);
});

// Quotes
const quotes = [
    "You are stronger than you think.",
    "Even the darkest night ends with sunrise.",
    "Breathe. Everything will be okay.",
    "Stay positive, stay strong!"
];

document.getElementById("quoteBtn").addEventListener("click", function () {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerText = quotes[random];
});

// Jokes
const jokes = [
    "Why don’t skeletons fight? They don’t have the guts 😂",
    "Parallel lines have so much in common. It’s a shame they’ll never meet 😆",
    "Why did the scarecrow win an award? He was outstanding in his field 😄"
];

document.getElementById("jokeBtn").addEventListener("click", function () {
    const random = Math.floor(Math.random() * jokes.length);
    document.getElementById("jokeDisplay").innerText = jokes[random];
});
