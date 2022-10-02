let board= [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let game_status=1;
let winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function checkForTie(){//method to check when it's a tie
    for(let i=0;i<board.length;i++){
        if(board[i]==-1){
            return false;
        }

    }
    return true;
}


function checkWinner(){ //method to check for the winner
    for(let i=0;i<winners.length;i++){
        if(board[winners[i][0]]!=-1 && board[winners[i][0]]==board[winners[i][1]] && board[winners[i][0]]==board[winners[i][2]]){
            
            return board[winners[i][0]];
        }
    }
    if(checkForTie()){
        return -2;
    }else{
        return -1;
    }
    
}

function minimax(isMaximizing,depth){ //implementing the minimax algorithm
    let winner=checkWinner();
    if(winner==-2){
        return 0;
    }else if(winner==0){
        return 1;
    }else if(winner==1){
        return -1;
    }

    if(isMaximizing){
        let bestScore=-Infinity;
        let score;
        for(let i=0;i<board.length;i++){
            if(board[i]==-1){
                board[i]=1;
                score=minimax(false,0);
                board[i]=-1
                if(score>bestScore){
                    bestScore=score;
                    
                }
            }
        }
        return bestScore;
    }else{
        let bestScore=Infinity;
        let score;
        for(let i=0;i<board.length;i++){
            if(board[i]==-1){
                board[i]=0;
                score=minimax(true,0);
                board[i]=-1
                if(score<bestScore){
                    bestScore=score;
                    
                }
            }
        }
        return bestScore;
    }
}

