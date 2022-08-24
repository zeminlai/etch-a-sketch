let length = 30;
let squareNum = length * length;
let square = [];
let container = document.querySelector(".container");
let gridColumnNum = "";
let color = "#00d2d3";
let rainbowStatus = 0;
let eraserStatus = 0;
let pencilStatus = 0;
let opacity = [];
let clearStatus = 0;

buildGridTemplateColumns();
container.style = "grid-template-columns:"+ gridColumnNum;
appendSquares();
hoverTrail();
changeGrid();
colorPick();
rainbowToggle();
eraserToggle();
pencilToggle();
clearToggle();

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
        initializePencilOpacity(i);
    }
}

function hoverTrail() {
    for (let i = 0; i < squareNum; i++){
        square[i].addEventListener("mouseover", (e)=>{
            // Check if rainbow button is on
            if (eraserStatus === 1) {
                color = "white";
            }
            else if (rainbowStatus === 1 && pencilStatus === 0){
                color = `rgb(${getRandomRgb()},${getRandomRgb()},${getRandomRgb()})`;
            }
            else if (pencilStatus === 1 && rainbowStatus === 0){
                color = "rgba(0,0,0,"+opacity[i]+")";
                opacity[i]+= 0.15;
            }
            e.target.style = `background-color: ${color}`;
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
            rainbowBtn.style = "animation: slidebg 60s linear infinite";
        }
        else {
            rainbowStatus = 0;
            rainbowBtn.style = "background-image: linear-gradient(to right,#5f27cd,#27ae60, #8e44ad,#ee5253,#5f27cd)";
        }
    })
}

function getRandomRgb() {
    return Math.random() * 255;
}

function eraserToggle() {
    let eraserBtn = document.querySelector("#eraser-img");
    eraserBtn.addEventListener("click", (e) => {
        if (eraserStatus === 0) {
            eraserStatus = 1;
            eraserBtn.style = "filter: brightness(80%)";
        }
        else {
            eraserStatus = 0;
            eraserBtn.style = "filter: brightness(100%)";
            color = "#00d2d3";
        }
    })
}

function pencilToggle() {
    let pencilBtn = document.querySelector("#pencil-img");
    pencilBtn.addEventListener("click", (e) => {
        if (pencilStatus === 0) {
            pencilStatus = 1;
            pencilBtn.style = "filter: brightness(80%)";
        }
        else {
            pencilBtn.style = "filter: brightness(100%)";
            pencilStatus = 0;
            color = "#00d2d3";
        }
    })
}

function initializePencilOpacity (i) {
    opacity[i] = 0.1;
}

function clearToggle() {
    let clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener("click", (e) => {
        for (let i = 0; i < squareNum; i++) {
            square[i].style = "background-color: white";
        }
    })
}