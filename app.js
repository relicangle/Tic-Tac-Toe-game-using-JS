let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let new1 = document.querySelector("#new");
let msg = document.querySelector(".msg");
let mes = document.querySelector("#mes");

let turnO = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() =>{
    turnO = true;
    enableBoxes();
    msg.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText ="0";
            turnO = false;
        }
       else{
        box.innerText ="X";
        turnO =true;
       }
       box.disabled = true;

       checkWinner();
    });
});

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner) =>{
    mes.innerText = `Congratulations, Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winPatterns){ 
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
    if(pos1Val ===  pos2Val  && pos2Val ===pos3Val){
        showWinner(pos1Val);
    }
    }
    }
}

new1.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
