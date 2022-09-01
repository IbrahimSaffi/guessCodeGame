 function calcScore(code,guess){
    let correctPos  =0
    let incorrectPos =0
    let visitedPositions = {}
    for(let i =0;i<guess.length;i++){
       if(guess[i]===code[i]){
        correctPos++
        visitedPositions[i] = true
       }
       else{
        let pos =  code.indexOf(guess[i])
        while(pos!==-1){
            if(!visitedPositions.hasOwnProperty(pos)&&guess[pos]!==code[pos]){
                incorrectPos++
                visitedPositions[pos] = true
                break
            }
            else{
                pos = code.indexOf(guess[i],pos+1)
            }
        }
        
       }
    }
    return {correctPos,incorrectPos}
}
console.log(calcScore([4,3,1,4],[4,4,4,4]))