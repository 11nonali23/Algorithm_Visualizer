
const redRGBA = 'rgba(255,0,0,1)';
const grey = "#5D6D7E";
var width = 7;
var margin = 5;
var randomHeights;
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function createCanvas () {
    
    randomHeights = [];
    var range = document.getElementById("slider").value;
    console.log("range selected: " + range);
    var width = 7;
    var margin = 5;
    
    //init randomHeights
    for(let i = 0; i < range; i++) {
        randomHeights[i] = Math.floor(Math.random() * 101); 
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); //delete previous rect
    
    ctx.save();
    ctx.fillStyle = grey;
    for(let i = 0; i < range; i++) {
        ctx.fillRect(margin, 20, width, randomHeights[i]);
        margin += (5+width);
    }
    ctx.restore();
}

function exchRectangles (pos1, pos2) {
    
    console.log("exchainging: " + pos1 + " " + pos2);
    
    //get rectangle coordinates
    var point1coord = getCoordinates(pos1);
    var point2coord = getCoordinates(pos2);
    
    console.log("they have heights: " + point1coord[0] + " " + point2coord[0]);
    
    //clear rectangles in that points
    ctx.clearRect(point1coord[1], 20, width, point1coord[0]);
    ctx.clearRect(point2coord[1], 20, width, point2coord[0]);
    
    
    //draw rectangles in different points
    ctx.save();
    
    ctx.fillStyle = grey;
    ctx.fillRect(point1coord[1], 20, width, point2coord[0]);    ctx.fillRect(point2coord[1], 20, width, point1coord[0]);
    
    ctx.restore();
    
}

function changeColor (position, isComparing) {
    
    //if is comparing become red otherwise become black
    if (isComparing)
        redRectangle(position);
    else 
        greyRectangle(position);
}

function redRectangle(position) {
    
    var coordinates = getCoordinates(position);

    ctx.save();
        
    ctx.clearRect(coordinates[1], 20, width, coordinates[0]);
    ctx.fillStyle = redRGBA;
    ctx.fillRect(coordinates[1], 20, width, coordinates[0]);
        
    ctx.restore();
}

function greyRectangle(position) {
    
    ctx.save();
    
    var coordinates = getCoordinates(position);
    ctx.clearRect(coordinates[1], 20, width, coordinates[0]);
    ctx.fillStyle = grey;
    ctx.fillRect(coordinates[1], 20, width, coordinates[0]);
    
    ctx.restore();
} 

//returns an array with height at first position and margin at second
function getCoordinates(position) {
    
    var height = randomHeights[position];
    var margin = 5;
    if (position !== 0){
        for(let i = 0; i < position; i++) {
                margin += (5 + width);
        }
    }
    return[height,margin];
}

function getVector() {
    return randomHeights;
}



