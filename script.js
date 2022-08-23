let length = 30;
let squareNum = length * length;
console.log(squareNum)
let square = [];
let container = document.querySelector(".container");
let gridColumnNum = "";

buildGridTemplateColumns();
container.style = "grid-template-columns:"+ gridColumnNum;
appendSquares();
hoverTrail();
changeGrid();

function changeGrid() {
    let slider = document.getElementById("myRange");
    slider.addEventListener("input", (e) => {
        length = e.target.value;
        squareNum = length * length;
        showLength(length);
        buildGridTemplateColumns();
        container.style = "grid-template-columns:"+ gridColumnNum;
        appendSquares();
        hoverTrail();
        
})
}

function buildGridTemplateColumns() {
    gridColumnNum = "";
    for (let i = 0; i < length; i++) {
        gridColumnNum = gridColumnNum + "auto ";
        
    }
}

function appendSquares(){
    container.innerHTML = '';
    console.log(`squarenum: ${squareNum}`);
    for (let i = 0; i < squareNum; i++) {
        square[i] =  document.createElement("div");
        container.appendChild(square[i]);
        square[i].style = "border: 0.5px solid black";
        square[i].classList.add(`square${i}`);
    }
}

function hoverTrail() {
    for (let i = 0; i < squareNum; i++){
        square[i].addEventListener("mouseover", (e)=>{
            console.log(e.target);
            e.target.style = "background-color: black";
        })
    }
}

function showLength(length) {
    let lengthText = document.querySelector(".lengthText");
    lengthText.textContent = `${length} x ${length} `;
}