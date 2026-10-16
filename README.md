# Library
# Rock Paper Scissors 🎮

A simple, interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript. This project helped me practise JavaScript fundamentals by turning a familiar game into a working web application.

Rather than focusing only on the final result, this project explores how user input, conditional logic, random choices, score tracking, and DOM manipulation work together to create an interactive experience.

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [How to Play](#how-to-play)
- [Game Rules](#game-rules)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How the Game Works](#how-the-game-works)
- [Getting Started](#getting-started)
- [What I Learned](#what-i-learned)
- [Future Improvements](#future-improvements)
- [Author](#author)

## About the Project

Rock Paper Scissors is a classic game in which a player competes against the computer by choosing rock, paper, or scissors.

The computer generates its own choice, and JavaScript compares the two choices to determine the outcome of each round.

The main objective of this project was to strengthen my understanding of JavaScript by building a complete, interactive game from scratch.

## How to Play

1. Open the game in your browser.
2. Choose Rock, Paper, or Scissors.
3. The computer randomly selects its move.
4. The game compares both choices and displays the result.
5. Continue playing until you complete five rounds.
6. Check the final scores to see who wins.

## Game Rules

The game follows three simple rules:

| Player's choice | Beats |
|---|---|
| Rock 🪨 | Scissors ✂️ |
| Paper 📄 | Rock 🪨 |
| Scissors ✂️ | Paper 📄 |

If both the player and the computer choose the same option, the round ends in a draw.

## Features

- Three playable options: Rock, Paper, and Scissors.
- Random computer choices.
- Automatic winner determination.
- Player and computer score tracking.
- Draw tracking.
- Five-round gameplay.
- Game restart functionality.

*Keep only the features that are implemented in your current version.*

## Technologies Used

- **HTML5:** Structures the game's interface.
- **CSS3:** Styles the interface and improves the user experience.
- **JavaScript:** Implements the game rules, computer choices, score tracking, and interactions.
- **Git and GitHub:** Used for version control and project hosting.

## How the Game Works

Understanding the logic is more important than simply knowing how to play.

### 1. Capturing the player's choice

When the player clicks one of the available options, JavaScript captures that choice.

For example, clicking the Rock button provides the game with the player's selected move.

### 2. Generating the computer's choice

The computer selects one of the three possible moves at random.

JavaScript's `Math.random()` can generate a random number, while `Math.floor()` can help convert it into an index for selecting an option from an array.

### 3. Determining the winner

The game compares the player's choice with the computer's choice.

The logic checks whether the choices are equal or whether one choice defeats the other according to the game rules.

### 4. Updating the scores

After determining the outcome, the game updates the appropriate score:

- Player wins: increase the player's score.
- Computer wins: increase the computer's score.
- Draw: increase the draw count.

### 5. Managing the game state

The game keeps track of information such as scores and the number of rounds played. When the game restarts, these values should return to their initial state.

This helps ensure that a new game begins without carrying over results from the previous game.

## Getting Started

You can run the project locally on your computer.

### Prerequisites

- A modern web browser.
- Git installed on your computer.
- A code editor, such as Visual Studio Code.

### Installation

**Step 1: Clone the repository**

Replace the placeholder URL with your actual GitHub repository URL.

```bash
git clone YOUR_REPOSITORY_URL
```

**Step 2: Open the project folder**

```bash
cd YOUR_PROJECT_FOLDER
```

**Step 3: Open the game**

Open `index.html` in your browser, or use the Live Server extension in Visual Studio Code if you have it installed.

No backend server is required for a basic HTML, CSS, and JavaScript implementation.

## What I Learned

Building this project gave me practical experience with:

- JavaScript variables and data types.
- Functions and event listeners.
- Conditional statements and Boolean logic.
- Random number generation.
- DOM manipulation and updating page content.
- Managing scores and game state.
- Resetting application state when restarting a game.
- Using Git and GitHub to track and publish project changes.

This project reinforced an important lesson: programming is not just about writing code; it is about breaking a problem into smaller steps and translating those steps into logical instructions.

## Future Improvements

Possible improvements include:

- Adding sound effects and animations.
- Improving responsiveness on mobile devices.
- Saving high scores using browser storage.
- Adding different difficulty levels.
- Improving accessibility and keyboard navigation.

These are potential enhancements, not necessarily features available in the current version.

## Author

**Frankline Ngeleyo**

Aspiring software developer passionate about learning through practical projects and building solutions that solve real problems.

GitHub: [Add your GitHub profile link here]

---

*If you are learning JavaScript too, feel free to explore the code, experiment with the logic, and build on the project.*