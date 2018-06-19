var currentPlayer;
alert("LOGIN SUCCESSFUL");
var player1 = prompt("Enter first player name: ");
var player2 = prompt("Enter second player name: ");
currentPlayer = prompt("Enter 1 for X or 2 for O");
var scorex = 0;
var scorey = 0;






var grid = new Array(3);
grid[0] = new Array(3);
grid[1] = new Array(3);
grid[2] = new Array(3);

//give each box a value
for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
        grid[i][j] = 0;
    }
}

function checkWinner() {

    for (var i = 0; i <= 2; i++) {
        if (grid[i][0] === 1 && grid[i][1] === 1 && grid[i][2] === 1) {
            alert("The winner is PLAYER 1");
            scorex = scorex + 1;
            reset();
        } else if (grid[i][0] === 2 && grid[i][1] === 2 && grid[i][2] === 2) {
            alert("The winner is PLAYER 2");
            scorey = scorey + 1;
            reset();
        }
    }

    for (var i = 0; i <= 2; i++) {
        if (grid[0][i] === 1 && grid[1][i] === 1 && grid[2][i] === 1) {
            alert("The winner is PLAYER 1");
            scorex = scorex + 1;
            reset();
        } else if (grid[0][i] === 2 && grid[1][i] === 2 && grid[2][i] === 2) {
            alert("The winner is PLAYER 2");
            scorey = scorey + 1;
            reset();
        }
    }

    if (grid[0][0] === 1 && grid[1][1] === 1 && grid[2][2] === 1) {
        alert("The winner is PLAYER 1");
        scorex = scorex + 1;
        reset();
    } else if (grid[0][2] === 1 && grid[1][1] === 1 && grid[2][0] === 1) {
        alert("The winner is PLAYER 1");
        scorex = scorex + 1;
        reset();
    } else if (grid[0][0] === 2 && grid[1][1] === 2 && grid[2][2] === 2) {
        alert("The winner is PLAYER 2");
        scorey = scorey + 1;
        reset();
    } else if (grid[0][2] === 2 && grid[1][1] === 2 && grid[2][0] === 2) {
        alert("The winner is PLAYER 2");
        scorey = scorey + 1;
        reset();
    }

    if (scorex || scorey === 3) {
        if (scorex > scorey) {
            alert("The Ultimate Winner is PLAYER 1!!");
            window.location.href = "congrats.html";
        } else if (scorex < scorey) {
            alert("The Ultimate Winner is PLAYER 2!!");
            window.location.href = "congrats.html";
        }
        scorex = 0;
        scorey = 0;
        reset();
    }
    document.getElementById("scorex").innerHTML = scorex;
    document.getElementById("scorey").innerHTML = scorey;

}









function clickBox(x, y) {
    // Checks If Grid Is Already Clicked
    if (grid[x][y] > 0) {
        alert("Spot is already clicked");
    }
    // Clicking Of Boxes
    else {
        if (currentPlayer == 1) {
            document.getElementById("" + x + y).innerHTML = "<img src=\"img/myx.png\" width=\"80px\" height=\"80px\">";
            grid[x][y] = 1;
            currentPlayer = 2;
        } else {
            document.getElementById("" + x + y).innerHTML = "<img src=\"img/myo.png\" width=\"80px\" height=\"80px\">";
            grid[x][y] = 2;
            currentPlayer = 1;
        }
    }
    checkWinner();
}





// Reset Game
function reset() {

    for (var i = 0; i <= 2; i++) {
        for (var j = 0; j <= 2; j++) {
            grid[i][j] = 0;
            document.getElementById("" + i + j).innerHTML = "&nbsp;";
        }
    }
    currentPlayer = 1;
}
