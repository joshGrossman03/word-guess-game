
//This is a word guessing game
<html>
<head>
<script>

var myAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var userGuess = 

function myFunction() {
  var x = document.getElementById("userGuess");
  x.value = x.value.toUpperCase();

  for (var x = 0; x < myAlphabet.length; x++) {

    // Console out the farm animal in the current index.
    console.log(myAlphabet[x]);

  }

    // If the first character in the current animal is "c" or "o", alert the following message.
    //if (myFarm[j].charAt(0) === "c" || myFarm[j].charAt(0) === "o") {
     // alert("Starts with a c or an o!");
    

  }
}
</script>

</head>
<body>

<p>A function is triggered when the user releases a key in the input field. The function transforms the character to upper case.</p>
Enter your name: <input type="text" id="fname" onkeyup="myFunction()">

</body>
</html>