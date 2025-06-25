let hands = ["rock", "paper", "scissor"]

function gethand(){
    let randomIndex = Math.floor(Math.random()*3)
    return hands[randomIndex]
}

console.log(gethand())