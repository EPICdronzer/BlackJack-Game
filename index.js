

let cards=[]
let sum=0
let blackJack=false
let isAlive=false
let message=""
let player={
    playerName: "Per",
    chips:145
}

function startGame(){
    let card1=getRandomCard(),card2=getRandomCard()
    cards=[card1,card2]
    sum=card1+card2
    isAlive=true
    renderGame()
    
    let playerel=document.querySelector("#play")
    playerel.innerText=player.playerName+ ": $" +player.chips
}
function renderGame()
{
    if(sum<=20)
        {
            message="You'r in game"
        }
        else if(sum===21)
        {
            message="you won"
            blackJack=true
        }
        else{
            message="You'r out of this game"
            isAlive=false
        }
        console.log(message)
        document.querySelector("#sum").textContent="Sum: "+sum
        document.querySelector('#cards').textContent="Cards: "
        for(let i=0;i<cards.length;i++){
            document.querySelector('#cards').textContent+=cards[i]+" "
        }
        document.getElementById("message").innerText=message
}

function newCard(){
    if(isAlive && !blackJack)
    {
    let card3=getRandomCard()
    console.log("Selected ur card")
    sum+=card3
    cards.push(card3)
    renderGame()
    }
}

function getRandomCard()
{
    let random=Math.floor(Math.random()*13)+1
    if(random===1) return 11
    else if(random>10) return 10
    else  return random
}

