let secret = Math.floor(Math.random()*10)+1; //1 - 10
function checkGuess(){
    const guess = parseInt(document.getElementById("guess").value);
    const msg = document.getElementById("message");
    if(!guess || guess<1 || guess>10){
        msg.textContent = "⚠️Enter a number between 1 and 10";
        msg.style.color = "red";
        return;
    }
    if(guess === secret){
        msg.textContent = "Correct number!! 🥳🎉";
        msg.style.color = "green";
    }else if(guess > secret){
        msg.textContent = "⬆️Too High, Try again!!";
        msg.style.color = "red";
    }else {
        msg.textContent = "⬇️Too Low, Try again!!";
        msg.style.color = "red";
    }
}