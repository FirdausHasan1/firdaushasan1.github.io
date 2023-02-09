var submit = document.getElementById("submit");
var reset = document.getElementById("reset");
var command = document.getElementById('commands');


submit.addEventListener("click", check);

var resetButton = document.getElementById("reset");
    resetButton.onclick = (e) => {
      editor.setValue("SELECT `name`, `sql`\n  FROM `sqlite_master`\n  WHERE type='table';");
    };

function check(){
const killer = "Bruce";
const accomplice = "Robin";
const city = "New York City";
const guess = document.querySelector(".guess").value;
const meme = document.getElementById("meme");

    if (guess === killer){
        meme.src = "https://api.memegen.link/images/buzz/"+ killer +"/is_the_thief.gif";
        event.preventDefault();
    }
    else if (guess === accomplice){
        meme.src = "https://api.memegen.link/images/buzz/"+ accomplice +"/is_the_accomplice.gif";
        event.preventDefault();
    }
    else if (guess === city){
        meme.src = "https://api.memegen.link/images/buzz/"+ city +"/is_the_right_one.gif";
        event.preventDefault();
    }
    else {
        meme.src="https://api.memegen.link/images/buzz/"+ guess +"/is_not_the_answer.gif";
        event.preventDefault();
    }
}
