const maxNumber = prompt("Whats the max number? (Higher number = Higher difficulty");

const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

let guess = prompt("Guess my number...");
let attempts = 1;

while (guess != randomNumber) {
    attempts++;
    if (guess > randomNumber) {
        guess = prompt("Your guess is too high.");
    }else {
        guess = prompt("Your guess is too low.");
    }
}

displayBanner(attempts);

function displayBanner(attempts) {
    let text = `Congratulations. It took you ${attempts} tries.`;
    var elem = document.getElementById('para');
    elem.textContent = text;
    elem.style.fontSize = "50px";
}




