const readline = require("readline-sync")

function main() {
    let code = generateCode()
    console.log(code)
    let i = 0
    while ( i < 10) {
        let guessedCode = readline.question("Guess the code: ")
        if(guessedCode.toLowerCase()==="quit"){
            console.log("Game has been quit")
            playAgain() 
        }
        if(guessedCode.length!==4){
            console.log("Incorrect Input")
        }
        else{
            let status = verifyGuess(code, guessedCode.split("").map(ele=>Number(ele)))
            if (status.correctPos === code.length) {
                 console.log("Correct - You win!")
                 playAgain()
             }
             else{
                 console.log(`${status.correctPos} matching digit(s) in correct position \n ${status.incorrectPos} matching digit(s) in incorrect position`)
                 console.log(`${9-i} attempt left`)
             }
        }
        i++
    }
    console.log(`You lose. Code was ${code.join("")}`)
    playAgain()
}
function playAgain(){
    let response = readline.question("If you want to play again Press Enter")
    main()
}
function generateCode() {
    let codeArr = new Array(4).fill(0).map(ele => Math.ceil(Math.random() * 5))
    return codeArr
}
function verifyGuess(code,guess){
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
main()