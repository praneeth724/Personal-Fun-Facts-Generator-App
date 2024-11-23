
// Array of fun facts
const facts = [
    "Bananas are berries, but strawberries aren't!",
    "Honey never spoils. Archaeologists have found pots of honey in ancient tombs.",
    "Octopuses have three hearts and blue blood.",
    "A day on Venus is longer than a year on Venus.",
    "Sharks existed before trees!",
    "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
    "The inventor of the Pringles can is buried in one.",
    "Sea otters hold hands while they sleep to keep from drifting apart.",
    "A group of flamingos is called a 'flamboyance.'",
    "Wombat poop is cube-shaped to mark their territory without rolling away.",
    "The heart of a blue whale is the size of a small car.",
    "Butterflies can taste with their feet.",
    "Sloths can hold their breath longer than dolphins.",
    "Cows have best friends and get stressed when separated.",
    "There’s a species of jellyfish that can live forever under the right conditions.",
    "Penguins propose to their mates with a pebble.",
    "Some cats are allergic to humans.",
    "The Twitter bird’s name is Larry.",
    "Bananas are naturally radioactive, but it's harmless.",
    "There are more trees on Earth than stars in the Milky Way.",
    "A shrimp's heart is in its head.",
    "Venus is the hottest planet in the solar system, not Mercury.",
    "The longest hiccuping spree lasted for 68 years.",
    "Elephants can 'hear' with their feet by detecting vibrations.",
    "The inventor of the frisbee was turned into a frisbee after his death.",
    "The small indents on a golf ball are called dimples.",
    "Koalas have fingerprints that are almost identical to humans.",
    "You can't hum while holding your nose closed.",
    "A group of crows is called a 'murder.'",
    "Ants don’t have lungs—they breathe through tiny holes in their bodies.",
    "Earth is the only planet not named after a god.",
    "A day on Mercury lasts 1,408 hours.",
    "The world's oldest piece of chewing gum is over 9,000 years old.",
    "A chef’s hat has exactly 100 folds, representing 100 ways to cook an egg.",
    "The shortest war in history lasted 38 to 45 minutes.",
    "It takes about 50 licks to finish a single scoop of ice cream.",
    "Pigeons can recognize themselves in a mirror.",
    "Tigers have striped skin, not just striped fur.",
    "Snails can sleep for up to three years.",
    "Dolphins have names for each other.",
    "There are more fake flamingos in the world than real ones.",
    "A human could swim through a blue whale's arteries.",
    "The 'M’s' in M&M’s stand for 'Mars' and 'Murrie.'",
    "The moon is moving away from Earth at a rate of 1.5 inches per year.",
    "There’s enough DNA in your body to stretch from the Sun to Pluto and back 17 times.",
    "A cloud can weigh over a million pounds.",
    "Peanuts are not nuts; they’re legumes.",
    "A day on Uranus is only 17 hours.",
    "The fingerprints of a koala are so indistinguishable from humans that they can confuse crime scenes.",
    "Some fish can cough.",
    "Pineapples take about two years to grow.",
    "The tongue of a blue whale weighs as much as an elephant.",
    "Octopuses lay 56,000 eggs at once, and most hatchlings don’t survive.",
    "The Eiffel Tower can sway up to 6 inches in the wind."
];


// Function to generate a random fact
function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomIndex];
    document.getElementById('fact').textContent = fact;
}

// Add event listener to the button
document.getElementById('generate-btn').addEventListener('click', generateFact);
