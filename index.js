
        // ==========================
        // GAME STATE
        // ==========================

        let playerChoice = "";
        let computerChoice = "";

        let playerScore = 0;
        let computerScore = 0;

        let roundResult = "";

        let gameActive = true;

        let currentRound = 0;
        const maximumRound = 5;

        const possibleChoices = ["Rock", "Paper", "Scissors"];

        // ==========================
        // DOM ELEMENTS
        // ==========================

        const rockBtn = document.querySelector(".rockBtn");
        const paperBtn = document.querySelector(".paperBtn");
        const scissorsBtn = document.querySelector(".scissorsBtn");
        const restartButton = document.querySelector(".restartButton");

        const playerChoiceDisplay = document.querySelector("#playerChoiceDisplay");
        const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
        const roundResultDisplay = document.querySelector("#roundResultDisplay");
        const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
        const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
        const winnerDisplay = document.querySelector("#winnerDisplay");
        const roundDisplay = document.querySelector("#round");

        // ==========================
        // EVENT LISTENERS
        // ==========================

        rockBtn.addEventListener("click", () => handlePlayerChoice("Rock"));
        paperBtn.addEventListener("click", () => handlePlayerChoice("Paper"));
        scissorsBtn.addEventListener("click", () => handlePlayerChoice("Scissors"));
        restartButton.addEventListener("click", restartGame);

        // ==========================
        // PLAYER CHOICE
        // ==========================

        function handlePlayerChoice(choice){
            if(!gameActive){
                return;
            }
            playerChoice = choice;
            playerChoiceDisplay.textContent = playerChoice;
            getComputerChoice()
            playRound()
        }

        // ==========================
        // COMPUTER CHOICE
        // ==========================

        function getComputerChoice() {
            const randomIndex = Math.floor(Math.random() * possibleChoices.length);
            computerChoice = possibleChoices[randomIndex];
            computerChoiceDisplay.textContent = computerChoice;
        }


        // ==========================
        // PLAY ROUND
        // ==========================

        function playRound() {
            if (playerChoice === computerChoice) {
                roundResult = "Draw";
            }

            else if (
                (playerChoice === "Rock" && computerChoice === "Scissors") ||
                (playerChoice === "Paper" && computerChoice === "Rock") ||
                (playerChoice === "Scissors" && computerChoice === "Paper")
            ) {
                roundResult = "Player Wins";
                playerScore++;
            }

            else {
                roundResult = "Computer Wins";
                computerScore++;
            }

            
            roundResultDisplay.textContent = roundResult;
            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;

            currentRound++;
            roundDisplay.textContent = currentRound;
            if (currentRound >= maximumRound) {
                endGame();
            }

        }


        // ==========================
        // END GAME
        // ==========================

        function endGame() {
            gameActive = false;
            if (playerScore > computerScore) {
                winnerDisplay.textContent = "Player Wins";
            }
            else if (computerScore > playerScore) {
                winnerDisplay.textContent = "Computer Wins";
            }

            else {
                winnerDisplay.textContent = "Draw";
            }
            console.log("Final Score -> Player:", playerScore, "| Computer:", computerScore);
        }



        // ==========================
        // RESTART GAME
        // ==========================

        function restartGame() {
            gameActive = true;

            playerChoice = "";
            computerChoice = "";

            playerScore = 0;
            computerScore = 0;

            roundResult = "";

            currentRound = 0;

            
            playerChoiceDisplay.textContent = "-";
            computerChoiceDisplay.textContent = "-";
            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            roundResultDisplay.textContent = "Waiting for player...";
            winnerDisplay.textContent = "-";
            roundDisplay.textContent = currentRound;
        }

    