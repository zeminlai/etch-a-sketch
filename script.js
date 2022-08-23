let length = 30;
let squareNum = length * length;
console.log(squareNum)
let square = [];
let container = document.querySelector(".container");
let gridColumnNum = "";
let color = "blue";
let rainbowStatus = 0;
let eraserStatus = 0;

buildGridTemplateColumns();
container.style = "grid-template-columns:"+ gridColumnNum;
appendSquares();
hoverTrail();
changeGrid();
colorPick();
rainbowToggle();
eraserToggle();

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
        // square[i].style = "border: 0.5px solid black";
        square[i].classList.add(`square${i}`);
    }
}

function hoverTrail() {
    for (let i = 0; i < squareNum; i++){
        square[i].addEventListener("mouseover", (e)=>{
            console.log(e.target);
            // Check if rainbow button is on
            if (eraserStatus === 1) {
                color = "white";
            }
            else if (rainbowStatus === 1){
                color = `rgb(${getRandomRgb()},${getRandomRgb()},${getRandomRgb()})`;
            }
            e.target.style = "background-color: "+color;
        })
    }
}

function showLength(length) {
    let lengthText = document.querySelector(".lengthText");
    lengthText.textContent = `${length} x ${length} `;
}

function colorPick() {
    let colorWheel = document.querySelector(".color");
    colorWheel.addEventListener("input", (e) => {
    color = e.target.value;
    })
}

function rainbowToggle() {
    let rainbowBtn = document.querySelector(".rainbow");
    rainbowBtn.addEventListener("click", (e) => {
        if (rainbowStatus === 0) {
            rainbowStatus = 1;
            rainbowBtn.style = "background-color: #78e08f";
        }
        else {
            rainbowStatus = 0;
            rainbowBtn.style = "background-color: white";
        }
    })
}

function getRandomRgb() {
    return Math.random() * 255;
}

function eraserToggle() {
    let eraserBtn = document.querySelector(".eraser");
    eraserBtn.addEventListener("click", (e) => {
        if (eraserStatus === 0) {
            eraserStatus = 1;
            eraserBtn.style = "background-color: #78e08f";
        }
        else {
            eraserStatus = 0;
            eraserBtn.style = "background-color: white";
            color = "blue";
        }
    })
}