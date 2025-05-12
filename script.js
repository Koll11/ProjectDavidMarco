const animals = [
    {
      name: "Lion",
      image: "Assets/Images/Lion.jpg",
      speed: 80,
      weight: 190,
      height: 1.2,
      length: 2.1
    },
    {
      name: "African elephant",
      image: "Assets/Images/African_Elephant.jpg",
      speed: 40,
      weight: 6000,
      height: 3.2,
      length: 7
    },
    {
      name: "Cheetah",
      image: "Assets/Images/Cheetah.jpg",
      speed: 130,
      weight: 72,
      height: 0.9,
      length: 1.5
    },
    {
      name: "Great White shark",
      image: "Assets/Images/Great_White_shark.jpg",
      speed: 56,
      weight: 1100,
      height: 1.3,
      length: 4.9
    },
    {
      name: "Golden eagle",
      image: "Assets/Images/Golden_Eagle.jpg",
      speed: 320,
      weight: 6.7,
      height: 0.5,
      length: 1
    },
    {
      name: "T-Rex",
      image: "Assets/Images/T-Rex.jpg",
      speed: 72,
      weight: 8000,
      height: 6.1,
      length: 12
    },
    {
      name: "Velociraptor",
      image: "Assets/Images/Velociraptor.jpg",
      speed: 40,
      weight: 20,
      height: 2,
      length: 1.8
    },
    {
      name: "Horse",
      image: "Assets/Images/Horse.jpg",
      speed: 71,
      weight: 420,
      height: 1.6,
      length: 2.4
    },
    {
      name: "Nile crocodile",
      image: "Assets/Images/NileCrocodile.jpg",
      speed: 35,
      weight: 750,
      height: 0.7,
      length: 4.2
    },
    {
      name: "Dolphin",
      image: "Assets/Images/Dolphin.jpg",
      speed: 60,
      weight: 200,
      height: 0.9,
      length: 4
    },
    {
      name: "Peregrine falcon",
      image: "Assets/Images/Peregrine falcon.jpg",
      speed: 390,
      weight: 1.5,
      height: 0.4,
      length: 0.58
    },
    {
      name: "Argentinosaurus",
      image: "Assets/Images/Argentinosaurus.jpg",
      speed: 7,
      weight: 100000,
      height: 21,
      length: 40
    },
    {
      name: "Blue whale",
      image: "Assets/Images/Blue_whale.jpg",
      speed: 48,
      weight: 150000,
      height: 4.9,
      length: 25
    },
    {
      name: "Bald eagle",
      image: "Assets/Images/Bald_eagle.jpg",
      speed: 160,
      weight: 6.3,
      height: 0.9,
      length: 1.02
    },
    {
      name: "Komodo dragon",
      image: "Assets/Images/Komodo dragon.jpg",
      speed: 20,
      weight: 91,
      height: 0.45,
      length: 2.6
    },
    {
      name: "Giraffe",
      image: "Assets/Images/Giraffe.jpg",
      speed: 60,
      weight: 1200,
      height: 5.5,
      length: 4.3
    },
    {
      name: "Hummingbird",
      image: "Assets/Images/Hummingbird.jpg",
      speed: 98,
      weight: 0.0045,
      height: 0.1,
      length: 0.1
    },
    {
      name: "Giant Panda",
      image: "Assets/Images/Giant Panda.JPG",
      speed: 32,
      weight: 120,
      height: 0.9,
      length: 1.9
    },
    {
      name: "Sloth",
      image: "Assets/Images/Sloth.jpg",
      speed: 0.27,
      weight: 6.3,
      height: 0.68,
      length: 0.8
    },
    {
      name: "Giant Pacific Octopus",
      image: "Assets/Images/Giant Pacific Octopus.jpg",
      speed: 40,
      weight: 71,
      height: 9,
      length: 5.4
    },
    {
      name: "Kangaroo",
      image: "Assets/Images/Kangaroo.jpg",
      speed: 70,
      weight: 85,
      height: 1.8,
      length: 2.5
    },
    {
      name: "Armadillo",
      image: "Assets/Images/Armadillo.jpg",
      speed: 30,
      weight: 8,
      height: 0.3,
      length: 0.9
    },
    {
      name: "Platypus",
      image: "Assets/Images/Platypus.jpg",
      speed: 2,
      weight: 2.4,
      height: 0.3,
      length: 0.5
    },
    {
      name: "Narwhal",
      image: "Assets/Images/narwhal.jpg",
      speed: 30,
      weight: 800,
      height: 4.5,
      length: 5.5
    },
    {
      name: "Okapi",
      image: "Assets/Images/Okapi.jpg",
      speed: 37,
      weight: 350,
      height: 1.5,
      length: 2.5
    },
    {
      name: "Tapir",
      image: "Assets/Images/Tapir.jpg",
      speed: 30,
      weight: 300,
      height: 1.2,
      length: 2
    },
    {
      name: "Manatee",
      image: "Assets/Images/Manatee.jpg",
      speed: 24,
      weight: 590,
      height: 1.5,
      length: 4
    },
    {
      name: "Aye-aye",
      image: "Assets/Images/Aye-aye.jpg",
      speed: 10,
      weight: 2.5,
      height: 0.4,
      length: 0.9
    },
    {
      name: "Capybara",
      image: "Assets/Images/Capybara.jpg",
      speed: 35,
      weight: 50,
      height: 0.6,
      length: 1.3
    },
    {
      name: "Red panda",
      image: "Assets/Images/Red panda.jpg",
      speed: 24,
      weight: 6.2,
      height: 0.6,
      length: 1.2
    },
    {
      name: "Wombat",
      image: "Assets/Images/Wombat.jpg",
      speed: 40,
      weight: 35,
      height: 0.8,
      length: 1.2
    },
    {
      name: "Tarsier",
      image: "Assets/Images/Tarsier.jpg",
      speed: 20,
      weight: 0.1,
      height: 0.2,
      length: 0.3
    },
    {
      name: "Quokka",
      image: "Assets/Images/Quokka.jpg",
      speed: 30,
      weight: 4,
      height: 0.5,
      length: 0.9
    },
    {
      name: "Axolotl",
      image: "Assets/Images/Axolotl.jpg",
      speed: 0.1,
      weight: 0.05,
      height: 0.2,
      length: 0.3
    },
    {
      name: "Pangolin",
      image: "Assets/Images/Pangolin.jpg",
      speed: 2,
      weight: 10,
      height: 0.5,
      length: 1
    },
    {
      name: "Triceratops",
      image: "Assets/Images/Triceratops.jpg",
      speed: 32,
      weight: 6000,
      height: 3,
      length: 9
    },
    {
      name: "Stegosaurus",
      image: "Assets/Images/Stegosaurus.jpg",
      speed: 6,
      weight: 5000,
      height: 4,
      length: 9
    },
    {
      name: "Brachiosaurus",
      image: "Assets/Images/Brachiosaurus.jpg",
      speed: 10,
      weight: 56000,
      height: 12,
      length: 26
    },
    {
      name: "Spinosaurus",
      image: "Assets/Images/Spinosaurus.jpg",
      speed: 27,
      weight: 7000,
      height: 7,
      length: 15
    },
    {
      name: "Ankylosaurus",
      image: "Assets/Images/Ankylosaurus.jpg",
      speed: 10,
      weight: 6000,
      height: 1.7,
      length: 6.5
    },
    {
      name: "Mammoth",
      image: "Assets/Images/Mammoth.jpg",
      speed: 25,
      weight: 8000,
      height: 3.4,
      length: 5.5
    },
    {
      name: "Saber-toothed tiger",
      image: "Assets/Images/Saber-toothed tiger.jpg",
      speed: 40,
      weight: 300,
      height: 1.1,
      length: 2.2
    },
    {
      name: "Allosaurus",
      image: "Assets/Images/Allosaurus.jpg",
      speed: 34,
      weight: 2000,
      height: 4.5,
      length: 12
    },
    {
      name: "Pteranodon",
      image: "Assets/Images/Pteranodon.jpg",
      speed: 80,
      weight: 25,
      height: 1.8,
      length: 7
    },
    {
      name: "Diplodocus",
      image: "Assets/Images/Diplodocus.jpg",
      speed: 20,
      weight: 15000,
      height: 4.6,
      length: 27
    },
    {
      name: "Polar bear",
      image: "Assets/Images/Polar bear.jpg",
      speed: 40,
      weight: 450,
      height: 1.6,
      length: 2.5
    },
    {
      name: "Gorilla",
      image: "Assets/Images/Gorilla.jpg",
      speed: 40,
      weight: 160,
      height: 1.7,
      length: 1.8
    },
    {
      name: "Leopard",
      image: "Assets/Images/Leopard.jpg",
      speed: 58,
      weight: 90,
      height: 0.8,
      length: 1.9
    },
    {
      name: "Orca",
      image: "Assets/Images/Orca.jpg",
      speed: 56,
      weight: 5400,
      height: 2.6,
      length: 8
    },
    {
      name: "Sea turtle",
      image: "Assets/Images/Sea turtle.jpg",
      speed: 35,
      weight: 200,
      height: 0.5,
      length: 1.5
    },
    {
      name: "Manta ray",
      image: "Assets/Images/Manta ray.jpg",
      speed: 24,
      weight: 1600,
      height: 1.2,
      length: 5
    },
    {
      name: "Walrus",
      image: "Assets/Images/Walrus.jpg",
      speed: 35,
      weight: 1200,
      height: 1.5,
      length: 3.6
    },
    {
      name: "Penguin",
      image: "Assets/Images/Penguin.jpg",
      speed: 10,
      weight: 30,
      height: 1.1,
      length: 0.8
    },
    {
      name: "Ostrich",
      image: "Assets/Images/Ostrich.jpg",
      speed: 70,
      weight: 150,
      height: 2.7,
      length: 2
    },
    {
      name: "Albatross",
      image: "Assets/Images/Albatross.jpg",
      speed: 127,
      weight: 8.5,
      height: 1.2,
      length: 3.4
    },
];

const categories = ["speed", "weight", "height", "length"];
let score = 0;
let currentAnimals = [];
let currentCategory = "";

function getRandomAnimal(exclude = []) {
    let filtered = animals.filter(a => !exclude.includes(a));
    return filtered[Math.floor(Math.random() * filtered.length)];
}

function getRandomCategory() {
    return categories[Math.floor(Math.random() * categories.length)];
}

function startGame() {
    score = 0;
    // O animal mais antigo será sempre o da esquerda (índice 0)
    currentAnimals = [getRandomAnimal(), getRandomAnimal()];
    while (currentAnimals[0] === currentAnimals[1]) {
        currentAnimals[1] = getRandomAnimal();
    }
    currentCategory = getRandomCategory();
    renderGame();
}

function renderGame(highlight = null, resultText = "") {
    document.body.innerHTML = `
        <h1 class="text-3xl font-bold text-blue-600 mb-6">Animal Battle</h1>
        <div class="mb-4 text-xl">Score: <span id="score">${score}</span></div>
        <div class="mb-4 text-lg font-semibold">Which animal has the highest <span class="text-blue-700">${currentCategory}</span>?</div>
        <div class="flex w-full h-[60vh]">
            ${currentAnimals.map((animal, idx) => `
                <div 
                    id="animal-${idx}" 
                    class="relative flex-1 h-full cursor-pointer transition-all duration-300 overflow-hidden
                        ${highlight === idx ? (resultText === "Correct!" ? "animate-pulse-green ring-4 ring-green-400 z-10" : "animate-shake ring-4 ring-red-400 z-10") : ""}
                    "
                    onclick="chooseAnimal(${idx})"
                >
                    <img src="${animal.image}" alt="${animal.name}" class="object-cover w-full h-full brightness-90">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <span class="bg-black bg-opacity-50 text-white text-3xl font-bold px-6 py-2 rounded">${animal.name}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        <div id="result" class="mt-4 text-xl font-bold transition-all duration-500 ${resultText === "Correct!" ? "text-green-600 scale-110" : resultText ? "text-red-600 scale-110" : ""}">
            ${resultText}
        </div>
    `;
}

window.chooseAnimal = function(idx) {
    const chosen = currentAnimals[idx];
    const other = currentAnimals[1 - idx];
    if (chosen[currentCategory] >= other[currentCategory]) {
        score++;
        renderGame(idx, "Correct!");
        let newAnimal;
        do {
            newAnimal = getRandomAnimal(currentAnimals);
        } while (currentAnimals.includes(newAnimal));
        setTimeout(() => {
            currentAnimals = [currentAnimals[1], newAnimal];
            currentCategory = getRandomCategory();
            renderGame();
        }, 900);
    } else {
        renderGame(idx, "Wrong! Score reset.");
        score = 0;
        setTimeout(startGame, 1200);
    }
};

startGame();
