var words = ["queen", "aerosmith", "altj", "rainbowkittensurprise", "u2", "journey", "beastieboys"]

//Empty variables to store values later
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;



// ALL FUNCTIONS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//__________________________________________________________
//GAME START FUNCTION
//__________________________________________________________
function Game() {
    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


//__________________________________________________________
//AUDIO FUNCTION
//__________________________________________________________

//variables for audio function
var a = document.getElementById("queen");
var r = document.getElementById("aerosmith");
var simpsons = document.getElementById("altj");
var scoobydoo = document.getElementById("rainbowkittensurprise");
var spongebob = document.getElementById("u2");
var danny = document.getElementById("journey");
var teent = document.getElementById("beastieboys");


function aud() {
    //Arthur Audio & Image
    //---------------------------
    if (randomWord === words[0]) {
        scoobydoo.pause();
        spongebob.pause();
        danny.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.play();
        document.getElementById("albumCover").src = "./assets/images/queen.jpeg";
    }
    //Rugrats Audio & Image
    //---------------------------
    else if (randomWord === words[1]) {
        scoobydoo.pause();
        spongebob.pause();
        danny.pause();
        teent.pause();
        simpsons.pause();
        a.pause();
        r.play();
        document.getElementById("albumCover").src = "./assets/images/aerosmith.jpg";
    }
    //Simpsons Audio & Image
    //---------------------------
    else if (randomWord === words[2]) {
        scoobydoo.pause();
        spongebob.pause();
        danny.pause();
        teent.pause();
        r.pause();
        a.pause();
        simpsons.play();
        document.getElementById("albumCover").src = "./assets/images/altj.png";
    }
    //Scooby-doo Audio & Image
    //---------------------------
    else if (randomWord === words[3]) {
        spongebob.pause();
        danny.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.play();
        document.getElementById("albumCover").src = "./assets/images/rainbowkittensurprise.jpeg";
    }
    //Spongebob Audio & Image
    //---------------------------
    else if (randomWord === words[4]) {
        danny.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.pause();
        spongebob.play();
        document.getElementById("albumCover").src = "./assets/images/u2.jpg";
    }
    //Danny Audio & Image
    //---------------------------
    else if (randomWord === words[5]) {
        spongebob.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.pause();
        danny.play();
        document.getElementById("albumCover").src = "./assets/images/journey.jpeg";
    }
    //Teen Titans Audio & Image
    //---------------------------
   else if (randomWord === words[6]) {
        spongebob.pause();
        danny.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.pause();
        teent.play();
        document.getElementById("albumCover").src = "./assets/images/beastieboys.jpg";
    }
};

//__________________________________________________________
//RESET FUNCTION
//__________________________________________________________
function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//__________________________________________________________
//CHECK LETTERS/COMPARE FUNCTION
//__________________________________________________________

//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

//__________________________________________________________
//FINAL COMPLETE FUNCTION
//__________________________________________________________

//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("albumCover").src = "./assets/images/gameover.gif"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}



Game()


document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}