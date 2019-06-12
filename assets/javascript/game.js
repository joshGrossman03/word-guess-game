var words = ["queen", "aerosmith", "altj", "rainbowkittensurprise", "u2", "journey", "beastieboys"]

//Empty variables to store values later
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var validLettersandBlanks = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;


// definition of functions
function Game() {
   
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersOfWord = randomWord.split("");
    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        validLettersandBlanks.push("_");
    }
    
    document.getElementById("currentword").innerHTML = "  " + validLettersandBlanks.join("  ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(validLettersandBlanks)
}


//__________________________________________________________
//AUDIO FUNCTION
//__________________________________________________________

//variables for audio function
var queen = document.getElementById("queen");
var aerosmith = document.getElementById("aerosmith");
var altj = document.getElementById("altj");
var rainbowkittensurprise = document.getElementById("rainbowkittensurprise");
var u2 = document.getElementById("u2");
var journey = document.getElementById("journey");
var beastieboys = document.getElementById("beastieboys");


function music() {
// queen song and album cover
    if (randomWord === words[0]) {
        rainbowkittensurprise.pause();
        u2.pause();
        journey.pause();
        beastieboys.pause();
        altj.pause();
        aerosmith.pause();
        queen.play();
        document.getElementById("albumCover").src = "./assets/images/queen.jpeg";
    }
  // aerosmith song and album cover
    else if (randomWord === words[1]) {
        rainbowkittensurprise.pause();
        u2.pause();
        journey.pause();
        beastieboys.pause();
        altj.pause();
        queen.pause();
        aerosmith.play();
        document.getElementById("albumCover").src = "./assets/images/aerosmith.jpg";
    }
 // altj song and album cover
    else if (randomWord === words[2]) {
        rainbowkittensurprise.pause();
        u2.pause();
        journey.pause();
        beastieboys.pause();
        aerosmith.pause();
        queen.pause();
        altj.play();
        document.getElementById("albumCover").src = "./assets/images/altj.png";
    }
// RKS song and album cover
    else if (randomWord === words[3]) {
        u2.pause();
        journey.pause();
        beastieboys.pause();
        altj.pause();
        aerosmith.pause();
        queen.pause();
        rainbowkittensurprise.play();
        document.getElementById("albumCover").src = "./assets/images/rainbowkittensurprise.jpeg";
    }
 // u2 song and album cover
    else if (randomWord === words[4]) {
        journey.pause();
        beastieboys.pause();
        altj.pause();
        aerosmith.pause();
        queen.pause();
        rainbowkittensurprise.pause();
        u2.play();
        document.getElementById("albumCover").src = "./assets/images/u2.jpg";
    }
// journey song and album cover
    else if (randomWord === words[5]) {
        u2.pause();
        beastieboys.pause();
        altj.pause();
        aerosmith.pause();
        queen.pause();
        rainbowkittensurprise.pause();
        journey.play();
        document.getElementById("albumCover").src = "./assets/images/journey.jpeg";
    }
// beastieboys song and album cover
   else if (randomWord === words[6]) {
        u2.pause();
        journey.pause();
        altj.pause();
        aerosmith.pause();
        queen.pause();
        rainbowkittensurprise.pause();
        beastieboys.play();
        document.getElementById("albumCover").src = "./assets/images/beastieboys.jpg";
    }
};

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    validLettersandBlanks = [];
    Game()
}


function checkLetters(letter) {
    var isLetterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            isLetterInWord = true;
        }
    }
    
    if (isLetterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                validLettersandBlanks[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(validLettersandBlanks);
}


//evaluates entry to see if is a win
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //onWin, plays associated song and album by calling music() and then resets to play next word guess
    if (lettersOfWord.toString() == validLettersandBlanks.toString()) {
        wins++;
        music()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

//when round is lost, returns game over gif and resets lettertrackers
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("albumCover").src = "./assets/images/gameover.gif"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
   //write correct guesses and remaining guesses to DOC
    document.getElementById("currentword").innerHTML = "  " + validLettersandBlanks.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


//calling function here to initiate game
Game()

// event listener to capture user inputs
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}