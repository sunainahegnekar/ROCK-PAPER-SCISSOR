let userscore=0;
let compscore=0;

const gencompchoice= ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const msg = document.querySelector("#msg");

const Draw = ()=>{
console.log("GAME WAS DRAW")
msg.innerText=("GAME WAS DRAW");
msg.style.backgroundColor="yellow";
}

const showWinnwer =(userWin)=>{
    if (userWin === true){
        console.log("you win!");
        msg.innerText=("YOU WIN!");
        msg.style.backgroundColor="green";
    }else{
        console.log("you lose");
        msg.innerText=("YOU LOSE");
        msg.style.backgroundColor="red";
    }
};



const playgame = (userchoice)=>{
console.log("user choice = ",userchoice);
const compChoice = gencompchoice();
console.log("Comp choice = ",compChoice);

if (userchoice === compChoice){
    Draw();
}
else{
    let userWin=true;
    if(userchoice === "rock"){
       userWin = compChoice === "paper"? false:true;
    }else if(userchoice === "paper"){
        userWin = compChoice === "scissors"?false:true;
    }else{
        userWin = compChoice ===  "rock"?false:true;
      }
    showWinnwer(userWin);
}
}

const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");
    playgame(userchoice)
})

})