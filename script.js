console.log("Welcome to Tic Tac Toe");
let backgroundMusic = new Audio('kid-games-music-comedy-situation-soundtrack-play-arcade-283659.mp3');
backgroundMusic.loop=true;
const button = document.querySelector('.playMusic');
button.addEventListener('click', () => {
    // Select the icon inside the button
    const icon = button.querySelector('i');

    // Toggle between volume-high and volume-mute icons
    if (icon.classList.contains('fa-volume-high')) {
        icon.classList.remove('fa-volume-high');
        icon.classList.add('fa-volume-xmark'); // Change to mute icon
        //play background music
        backgroundMusic.pause();
    } else {
        icon.classList.remove('fa-volume-xmark');
        icon.classList.add('fa-volume-high'); // Change back to high icon
        //pause background music
        backgroundMusic.play();
    }
});
// music.addEventListener('ended',()=>{
//     music.play();
// })
let audioTurn = new Audio('glass-ting-89283.mp3');
let gameover = new Audio('negative_beeps-6008.mp3');
let turn = "X";
let isGameOver = false;

//function to change turns
const changeTurn = () => {
    return turn === "X" ? "O":"X";
}

//function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,46],
        [2,4,6,0,15,134]
    ];
    wins.forEach( e =>{
        if( (boxtext[e[0]].innerText !== '') && ( boxtext[e[0]].innerText === boxtext[e[1]].innerText ) && ( boxtext[e[2]].innerText === boxtext[e[1]].innerText ) ){
            isGameOver = true;
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width="30vw";
        }

        
    } )
}
//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            // audioTurn.pause();
            audioTurn.currentTime=0;
            audioTurn.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
            }
            
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach((element)=>{
        element.innerText ="";
    });
    turn="X";
    isGameOver = false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0";
    document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
    document.querySelector('.line').style.width="0vw";
    document.querySelector('.line').style.transform = `translate( 0vw, 0vw) rotate(0deg)`;
})