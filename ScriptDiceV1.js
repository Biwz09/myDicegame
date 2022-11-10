
	// Player name
	var player1 = "Player 1";
	var player2 = "Player 2";

	// Function to roll the dice
	function rollTheDice() {
		setTimeout(function () {
			var Random1 = Math.floor(Math.random() * 6) + 1;
			var Random2 = Math.floor(Math.random() * 6) + 1;

			document.querySelector(".img1").setAttribute("src","photo/dice" + Random1 + ".png");

			document.querySelector(".img2").setAttribute("src","photo/dice" + Random2 + ".png");

			if (Random1 === Random2) {
				document.querySelector("h1").innerHTML = "Draw!";
			}

			else if (Random1 < Random2) {
                document.getElementById("myDIV").style.backgroundImage = "url(https://i.pinimg.com/originals/9c/9c/95/9c9c9594083c7803650bca0f43f2b326.gif)";
				document.querySelector("h1").innerHTML = (player2 + " WINS!");
			}

			else {
                document.getElementById("myDIV").style.backgroundImage = "url(https://i.pinimg.com/originals/9c/9c/95/9c9c9594083c7803650bca0f43f2b326.gif)";
				document.querySelector("h1").innerHTML = (player1 + " WINS!");
			}
		}, 2500);
	}

