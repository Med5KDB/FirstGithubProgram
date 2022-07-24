let secretNumber= Math.trunc(Math.random() * 50) +1;
let score=20;
let highscore=0;

// document.querySelector('.number').textContent =secretNumber; permet de mettre le nbre aleatoire au lieu du pt d'interrogation 
document.querySelector('.check').addEventListener('click', function () {
 const guess= Number(document.querySelector('.guess').value);
 console.log(guess,typeof guess);

 // When there is no input 
 if(!guess){
    document.querySelector('.message').textContent= '⛔️ No number';
 // When the player win 
 } else if(guess === secretNumber) {
    document.querySelector('.number').textContent =secretNumber;
    document.querySelector('.message').textContent=' Well done! 🎉The number is correct!';
    document.querySelector('body').style.backgroundColor ='#60b347';//pour changer un style css
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore
    }
 // Whem it's too high 
 }else if (guess > secretNumber){
    if (score > 1){
        document.querySelector('.message').textContent= '📈 Too high !';
        score--;
        document.querySelector('.score').textContent=score;
        // document.querySelector('.highscore').textContent=score;
    } else{
        document.querySelector('body').style.backgroundColor='brown';
        document.querySelector('.message').textContent= '💥 Damn ! You lost the game !';
        document.querySelector('.number').textContent =secretNumber;
        // document.querySelector('.highscore').textContent=score;
    }
 // When it's too low
 }else if (guess < secretNumber){
    if(score > 1){
        document.querySelector('.message').textContent= '📉 Too low !';
        score--;
        document.querySelector('.score').textContent=score;
        // document.querySelector('.highscore').textContent=score;
    }else{
        document.querySelector('body').style.backgroundColor='brown';
        document.querySelector('.message').textContent= 'Damn ! You lost the game !';
        document.querySelector('.number').textContent =secretNumber;
        // document.querySelector('.highscore').textContent=score;
    }
 }
}); 
//When the player want to play another part
document.querySelector('.again').addEventListener('click',function() {
    score=20;
    secretNumber= Math.trunc(Math.random() * 50) +1;

    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.guess').value='';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
})
// faire par ex <div class="texte hidden">hi ladies and gentelman</div> ce ladies and gentelman ne s'affichera pas sur Html