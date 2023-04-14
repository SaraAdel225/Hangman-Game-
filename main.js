// create letter in page
let divLetter = document.createElement("div")
divLetter.className = "word"
let letters ="abcdefghijklmnopqrstuwvxyz".toUpperCase().split("")
letters.forEach (letter =>{
    let spans = document.createElement("span")
    spans.className = "box-letter"
    let contSpan = document.createTextNode(letter)
    spans.appendChild(contSpan)
    divLetter.appendChild(spans)
    document.querySelector(".row").appendChild(divLetter)
})

//Object Of Words + Categories
const ObjectWords = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Gandhi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
    }
//Keys
    let allKey = Object.keys(ObjectWords)
    let  randKeys =  Math.floor(Math.random(allKey.length) * allKey.length)
// Key Value
    allValue = ObjectWords[allKey[randKeys]]
    randomValue = Math.floor(Math.random() * allValue.length)
    document.querySelector(".category span").appendChild(document.createTextNode(allKey[randKeys]))

// create letter-guess 
    guessLetter = document.querySelector(".letter-guess")

    allValue[randomValue].split("").forEach(function(ele){
        spanGueLetter = document.createElement("span")
        guessLetter.appendChild(spanGueLetter)
        
        if(ele == " "){
            spanGueLetter.className = "emptySpace"
        }
    })
    let counter = 0
    let win = 0
    document.addEventListener("click", (e) =>{
        //set state to Correct 
        let Correct = false
        if(e.target.className === 'box-letter' ){
            e.target.classList.add("clicked")
            let letters = e.target.innerHTML

            allValue[randomValue].toUpperCase().split("").forEach((wordLetter, index) =>{
                if(letters == wordLetter){
                    document.querySelectorAll(".letter-guess span").forEach((span, indexSpan)=>{
                        if(index == indexSpan ){
                            Correct = true
                            span.innerHTML = letters
                            win++
                        }
                    })
                }
            })
        if(win ==  allValue[randomValue].length){
            winGame()
        }
        if(Correct !== true){
            counter++
            document.querySelector(".the-draw").classList.add(`wrong-${counter}`)
            document.getElementById("fail").play()
            if(counter === 9){

                endGame();
                document.querySelector(".word").classList.add("finished")
                }
            }
            else{
                document.getElementById("success").play();
        }
    }
    })

function endGame(){
    let gameOver = document.createElement("div")
    gameOver.appendChild(document.createTextNode(`Game Over, The Word Is ${allValue[randomValue].toUpperCase()}`))
    gameOver.className = "gameOver"
    document.querySelector(".letter-guess").after(gameOver)
    let buttonReload = document.createElement("button")
    buttonReload.appendChild(document.createTextNode("try again"))
    gameOver.appendChild(buttonReload)
    buttonReload.onclick = function(){
        window.location.reload()
    }
}

function winGame(){
    let win = document.createElement("div")
    win.appendChild(document.createTextNode(`Congratulation Your Win`))
    win.className = "gameOver"
    document.querySelector(".letter-guess").after(win)
    let buttonReload = document.createElement("button")
    buttonReload.appendChild(document.createTextNode("Play again"))
    win.appendChild(buttonReload)
    buttonReload.onclick = function(){
        window.location.reload()
    }
}