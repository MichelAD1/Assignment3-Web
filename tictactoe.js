let board= [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let game_status=1;
let winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function checkForTie(){
    for(let i=0;i<board.length;i++){
        if(board[i]==-1){
            return false;
        }

    }
    return true;
}