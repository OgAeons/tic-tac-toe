let allBoxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset")

let turn_O = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5], 
    [6, 7, 8]
]

allBoxes.forEach((box) => {
    box.addEventListener("click", function(){
        if(turn_O){
            box.innerHTML = "O"
            turn_O = false
        }else{  
            box.innerHTML = "X"
            turn_O = true
        }
        box.classList.add("disabled");
        checkWinner()
    })
})

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = allBoxes[pattern[0]].innerHTML
        let pos2Val = allBoxes[pattern[1]].innerHTML
        let pos3Val = allBoxes[pattern[2]].innerHTML
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                document.querySelector(".winner").style.display = "block"
                document.querySelector(".winner").innerHTML = "!! Winner is " + pos1Val + " !!"
                allBoxes.forEach(function(box) {
                    box.classList.add("disabled");
                })
            }
        }
    }
}

resetBtn.addEventListener("click", () => {
    turn_O = true;
    document.querySelector(".winner").style.display = "none"
    allBoxes.forEach(function(box) {
        box.classList.remove("disabled");
        box.innerHTML = ""
    })
})