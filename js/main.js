//Variables

var canvasx = $(canvas).offset().left;
var canvasy = $(canvas).offset().top;
var last_mousex = last_mousey = 0;
var mousex = mousey = 0;
var mousedown = false;

// Array for storing previous words that are found

var previousLines = [];

// Positioning data for grid rendering

var xPadding = 30;
var yPadding = 30;
var xRenderLetter = xPadding;
var yRenderLetter = yPadding;
var gridSquareSize = 30;
var gridSquareOffset = 5;

// Count data for grid rendering
var columnCount = 1;

// Initial render

$(document).ready(function () {
    prepareCanvas();
    drawGrid();
    drawWordList();
});

function prepareCanvas() {
    //Prepares the HTML canvas

    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.font = '28px Roboto Mono';
}

function drawGrid() {
    // Draws the grid of letters

    for (var i = 0; i < letterString.length; i++) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#accddd";
        ctx.beginPath();
        ctx.rect(gridSquareSize - gridSquareOffset, 0 + gridSquareOffset, xRenderLetter, yRenderLetter);
        ctx.stroke();
        ctx.fillText(letterString.charAt(i), xRenderLetter, yRenderLetter);
        xRenderLetter += xPadding;
        columnCount += 1;

        // When columns created = maxColumns, create a new row
        if (columnCount > columnLength) {
            columnCount = 1;
            yRenderLetter += yPadding;
            xRenderLetter = xPadding;
        }
    }
    xRenderLetter = xPadding;
    yRenderLetter = yPadding;
    columnCount = 1;
}

function drawPreviousLines() {
    // Draws the lines from previously found words

    for (var i = 0; i < previousLines.length; i++) {
        ctx.strokeStyle = "rgba(" + previousLines[i][4] + ")";
        ctx.lineWidth = 20;
        ctx.lineJoin = ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(previousLines[i][0], previousLines[i][1]);
        ctx.lineTo(previousLines[i][2], previousLines[i][3]);
        ctx.stroke();
    }
}

function drawCurrentLine(e) {
    // Draws a line from previous mousedown to current mouse position

    // Get current mouse position (end point of the line)
    mousex = parseInt(e.clientX - canvasx);
    mousey = parseInt(e.clientY - canvasy);

    // Draw a line from previously stored position to current position
    ctx.beginPath();
    ctx.moveTo(last_mousex, last_mousey);
    ctx.lineTo(mousex, mousey);
    ctx.strokeStyle = 'rgba(255,0,0,0.5)';
    ctx.lineWidth = 20;
    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.stroke();
}

function drawWordList() {
    var para = document.getElementById('wordlist');
    // loop through wordlist, check if each word has been found and render accordingly
    var wordListString = "";
    for (var i = 0; i < wordList.length; i++) {
        wordListString += "<div class='wordlist-item' id='" + wordList[i][4] + "'>";
        wordListString += "<span class='highlight' style='background-color:rgba(" + wordList[i][5] + ")'></span>";
        wordListString += "<span class='text'>" + wordList[i][4] + "</span>"
        wordListString += "</div>";
    }
    var para = document.getElementById('wordlist');
    para.innerHTML = wordListString;
}

function checkFirstLetters() {
    // loop through wordList start coordinates and compare them to last_mousex
    // If the distance is < gridSquareSize, match found

    for (var i = 0; i < wordList.length; i++) {
        startX = wordList[i][0];
        startY = wordList[i][1];
        distanceX = startX - last_mousex;
        distanceY = startY - last_mousey;
        distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        console.log("Distance between selection and first letter is " + distance);

        // If distance of first letter is within the threshold, check the second letter
        if (distance < gridSquareSize) {
            checkSecondLetter(i, startX, startY);
        }
    }

}

function checkSecondLetter(wordListIndex, startX, startY) {
    // Check distance between current selection and last letter's location < gridSquareSize

    endX = wordList[wordListIndex][2];
    endY = wordList[wordListIndex][3];
    distanceX = endX - mousex;
    distanceY = endY - mousey;
    distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    console.log("Distance between selection and last letter is " + distance);

    // If distance of second letter is within threshold, a word is found
    if (distance < gridSquareSize) {

        // Save the line data to previousLines array
        previousLines.push([startX, startY, mousex, mousey, wordList[wordListIndex][5]]);
        //wordList[wordListIndex][4] = "<del>" + wordList[wordListIndex][4] + "</del>";
        // TRIGGER CSS CHANGE
        $('#' + wordList[wordListIndex][4]).toggleClass('complete');
        redrawGame();

    }
}

function redrawGame(e) {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw the grid, previous line, and the line currently being drawn
    drawGrid();
    drawPreviousLines();
    drawCurrentLine(e);
}

//Mousedown

$(canvas).on('mousedown', function (e) {
    // Save the mouse position and register the mouse event

    last_mousex = parseInt(e.clientX - canvasx);
    last_mousey = parseInt(e.clientY - canvasy);
    mousedown = true;

});

//Mouseup

$(canvas).on('mouseup', function (e) {
    // Register the mouse up and start checking for a match

    mousedown = false;
    checkFirstLetters();
});

//Mousemove

$(canvas).on('mousemove', function (e) {
    // Continuously Redraw the grid, previous lines, and current line

    if (mousedown) {
        redrawGame(e);
    }
    //Output
    $('#output').html('current: ' + mousex + ', ' + mousey + '<br/>last: ' + last_mousex + ', ' + last_mousey + '<br/>mousedown: ' + mousedown);
});