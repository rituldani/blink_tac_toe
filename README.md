# ✨ Blink Tac Toe 🎮

A fun, interactive 2-player emoji twist on the classic Tic Tac Toe! Built with React + Tailwind CSS.

---

## 🚀 Features

- 🔢 3x3 grid game board with emojis
- 😎 Choose your own emoji category (Animals, Food, Sports, or Custom)
- 🎲 Random emoji gets selected per turn from chosen category
- 🌟 Emojis vanish after placement (Blink twist!)
- 🔁 Multiple rounds with alternating starting player
- 🥇 Score tracking across rounds
- 🔊 Sound effects with Mute/Unmute toggle
- 🌓 Light/Dark theme toggle
- ⚙️ Settings panel to customize your game
- ❓ Help section for first-time players

---

## 📸 Screenshots

![screenshot](./public/screenshot.png)

---

## 🛠 Tech Stack

- **React**
- **Tailwind CSS**
- **React Icons**
- **HTML5 Audio API** for sound
- **Framer Motion** (optional for animations)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/blink-tac-toe.git
cd blink-tac-toe
npm install
npm run dev
```

## 📁 Project Structure

  src/
  │
  ├── components/
  │   ├── GameBoard.jsx
  │   ├── EmojiSelector.jsx
  │   ├── SettingsPanel.jsx  
  │   ├── HelpModal.jsx
  │   └── ScoreBoard.jsx
  │
  ├── App.jsx
  ├── index.js
  └── styles/
      └── index.css

🧠 Rules of the Game
  - Each player chooses an emoji category before the game starts.
  - On your turn, a random emoji from your category will be placed in a square.
  - The first player to make a line of 3 emojis of the same category wins!
  - Emojis vanish after a few seconds – keep an eye!
  - Score is tracked across rounds. Alternate turns every new game.

🔊 Sound Effects
   - Place emoji: Click sound
   - Win: Victory chime
   - Invalid move: Error buzz
   - Emoji vanishes: Soft vanish tone

🌙 Theme
  - Default: Dark Mode
  -  Toggle between light/dark themes from the settings icon (⚙️)
