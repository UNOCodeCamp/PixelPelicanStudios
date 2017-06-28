var passcode = ~~(Math.random() * 1000);
var tries = 10;

var cueText = document.getElementById("clues")

var number = document.getElementById("guess-number");

var attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left: " + tries;
button.addEventListener("click", guessnumber);

function guessnumber()
{
    tries = tries - 1;
    attemptsText.innerHTML = "Number of attempts left: " + tries; 
    console.log("Guess a number between 0-999");
    var guess = number.value;
    tries = tries - 1;
    if (guess == passcode)  
    {
        console.log ("you win");
        document.body.innerHTML = "<h1>You Win!</h1>"
    }
    else if (tries <= 0)
    {
        console.log ("die in a hole");
        document.body.innerHTML = "<h1>Die in a hole!</h1>" + "<p>The number was:" + passcode + "</p>";
    } 
     else
    {
       giveClue(guess);
    }
}


function giveClue(guess)
{
    if (guess > passcode)
    {
       alert(guess + "is to High!");
       clueText.innerHTML += "<li>" + guess + "is too High!" + "</li>"
    }
    else
    {
        alert(guess + "is to Low!");
        clueText.innerHTML += "<li>" + guess + "is too Low!" + "</li>"
    }
}