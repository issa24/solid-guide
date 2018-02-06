var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");

init();

function init(){
    // mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}
    function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
     //This is another way to write an if/else statement.It's ashorter way. 
           this.textContent === "Easy" ?  numSquares = 3 : numSquares = 6;
            
          /*    if(this.textContent === "Easy"){
                numSquares = 3;
            } else {
                numSquares = 6;
            } 
    
            //figure out how many squares to show
            //pick new colors
            // pick a new pickedColor
            //update page to reflect changes */
            reset();
        });
    
    }
}
    function setupSquares(){
        for( var i = 0; i < squares.length; i++){
        //Add initial colors to squares
        //squares[i].style.backgroundColor = colors[i]; We don't need this anymore 
    
        // Add click listeners to squares
        squares[i].addEventListener("click", function(){
            //Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            
            //Compare color to pickedColor
           if(clickedColor === pickedColor){
               message.textContent = "Correct";
               resetButton.textContent = "Play Again?";
               changeColors(clickedColor);
               h1.style.backgroundColor = clickedColor;
           } 
           else {
                this.style.backgroundColor ="#232323";
                message.textContent = "Try Again !"
    
           }
        });
    }
    reset();
}



function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    message.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.display = "block";    
        squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].style.display = "none";
    }
    }
    h1.style.backgroundColor = "steelblue";
    
}


/* easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];

        } else {
            squares[i].style.display = "none"
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
       
            squares[i].style.backgroundColor = colors[i];

        
            squares[i].style.display = "block";
    }     
}) */

resetButton.addEventListener("click", function(){
    reset();
    /* //generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent ="New Colors";
    message.textContent ="";
    for(var i = 0; i <squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "232323"; */
});

//colorDisplay.textContent = pickedColor;

/* for( var i = 0; i < squares.length; i++){
    //Add initial colors to squares
    //squares[i].style.backgroundColor = colors[i]; We don't need this anymore 

    // Add click listeners to squares
    squares[i].addEventListener("click", function(){
        //Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        
        //Compare color to pickedColor
       if(clickedColor === pickedColor){
           message.textContent = "Correct";
           resetButton.textContent = "Play Again?";
           changeColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
       } 
       else {
            this.style.backgroundColor ="#232323";
            message.textContent = "Try Again !"

       }
    });
} */
function changeColors(color){
    // Loop through all squares
    for(var i = 0; i < squares.length; i++){
        //Change color to match given color
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    // Make an array
    var arr = [];
    //Add num random colors to array
    for(var i = 0; i < num; i++){ 
        //get random color and push into arr
        arr.push(randomColor());
    }
    //Return that array
    return arr;
}
function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
