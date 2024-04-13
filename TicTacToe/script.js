const board = document.querySelector('.board');
const box = document.querySelectorAll('.box');
const message = document.querySelector('.message');
const restartBtn = document.querySelector('.restart');
const players = ['X','O'];
let currentPlayer = players[0];
const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

for(let i = 0; i<box.length; i++){
    box[i].addEventListener('click',()=>{
        if(box[i].textContent !== "" ){
            return;
        }
        box[i].textContent = currentPlayer;
        // check winner 
        if(Winner(currentPlayer)){
            message.textContent = `${currentPlayer} has won the game.Restart the game!`;
            
            return;
        }
        // check tie 
        if(Tie()){
            message.textContent =  `Game is tied! Restart the game.`;
            return;
        }
        // restart 
        restartBtn.addEventListener('click',()=>{
            if(restartGame()){
                return ;
            }
        });
        currentPlayer = currentPlayer === players[0] ? players[1]:players[0];
        if(currentPlayer == players[0]){
            message.textContent = "Its X's turn";
        }else{
            message.textContent = "Its O's turn";
        }
    })
}
function Winner(currentPlayer){
    for(let i=0; i<winningPattern.length; i++){
        // what is this variable called
        let [a,b,c] = winningPattern[i];

        if(
         (box[a].textContent === currentPlayer) &&
         (box[b].textContent === currentPlayer) && 
         (box[c].textContent === currentPlayer)
         ){
                return true;
            }
            
    }
    return false;

}
function Tie(){
    for(let i=0; i<box.length; i++){
        if(box[i].textContent === ""){
            return false;
        }
    }
    return true;
}
// restart 
function restartGame(){
    for(let i=0;i<box.length;i++){
        box[i].textContent = "";
        message.textContent = "its X's turn";
        currentPlayer = players[0];
    }
}