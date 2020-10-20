/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,extraDice,winscore;
init();

document.querySelector(".btn-roll").addEventListener("click",function(){
    if(scores[activePlayer]<winscore){    
    var dice=Math.floor((Math.random()*6))+1;
    var dice1=Math.floor((Math.random()*6))+1;
    var diceDom=document.querySelector(".dice");
    diceDom.style.display="block";
    document.querySelector(".dice-1").style.display="block";
    diceDom.src="dice-"+dice+".png";
    document.querySelector(".dice-1").src="dice-"+dice1+".png";
        
    
    
    if(dice!==1 && dice1!==1){
            roundScore=roundScore+dice+dice1;
            document.querySelector("#current-"+activePlayer).textContent=roundScore;
        }
    else{
        nextPlayer();
    }
}
});

document.querySelector(".btn-hold").addEventListener("click",function(){
   var input=document.querySelector(".final-score").value;
    if(input){
    winscore=input;
}
    if(scores[activePlayer]<winscore){ 
        scores[activePlayer]+=roundScore;
        document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
        if(scores[activePlayer] >= winscore){
            document.querySelector("#name-"+activePlayer).textContent="Winner!";
            document.querySelector(".dice").style.display="none";
            document.querySelector(".dice-1").style.display="none";
            document.querySelector(".player-"+activePlayer+"panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+"panel").classList.remove("active");
        
        }
        else{
        nextPlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener("click",init);

function nextPlayer(){
    roundScore=0; 
    document.querySelector("#current-"+activePlayer).textContent=roundScore;
    activePlayer===0 ? activePlayer=1 :activePlayer=0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

}

function init(){
scores=[0,0];
roundScore=0;
activePlayer=0;
extraDice=0;
winscore=100;

document.querySelector("#score-0").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector("#score-1").textContent=0;
document.querySelector("#current-1").textContent=0;
document.querySelector(".dice").style.display="none";
document.querySelector(".dice-1").style.display="none";
document.querySelector("#name-0").textContent="Player 1";
document.querySelector("#name-1").textContent="Player 2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}