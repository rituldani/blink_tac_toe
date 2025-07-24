import { useState, useEffect } from "react";
import SettingsPanel from "./components/SettingsPanel";
import CategorySelector from "./components/CategorySelector";
import GameBoard from "./components/GameBoard";
import GameStatus from "./components/GameStatus";
import { sounds, playSound } from "./components/SoundManager";

const emojiCategories = {
  Animals: ["🐶", "🐱", "🐵", "🐰"],
  Food: ["🍕", "🍟", "🍔", "🍩"],
  Sports: ["⚽️", "🏀", "🏈", "🎾"],
  Nature: ["🌸", "🌲", "🌞", "🌧️"],
};

export default function App() {
  const [player1Category, setPlayer1Category] = useState("");
  const [player2Category, setPlayer2Category] = useState("");
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [turn, setTurn] = useState("player1");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [playerMoves, setPlayerMoves] = useState({ player1: [], player2: [] });
  const [scores, setScores] = useState({
    player1: 0,
    player2: 0,
  });
  const [playerNames, setPlayerNames] = useState({
    player1: "Player 1",
    player2: "Player 2",
  });
  const [editingPlayer, setEditingPlayer] = useState(null); // "player1" | "player2" | null


  const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleCategorySelect = (player, category) => {
    if (player === "player1" && category === player2Category) {
      playSound(sounds.error, isMuted);
      alert("Player 1 cannot choose the same category as Player 2!");
      return;
    }
    if (player === "player2" && category === player1Category) {
      playSound(sounds.error, isMuted);
      alert("Player 2 cannot choose the same category as Player 1!");
      return;
    }

    playSound(sounds.beep, isMuted);
    player === "player1" ? setPlayer1Category(category) : setPlayer2Category(category);

    if ((player === "player1" ? category : player1Category) &&
      (player === "player2" ? category : player2Category) &&
      player1Category !== player2Category) {
      setIsCategorySelected(true);
    }
  };

  const getRandomEmoji = (player) => {
    const category = player === "player1" ? player1Category : player2Category;
    const emojis = emojiCategories[category];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const handleCellClick = (index) => {
    if (board[index] || winner || !isCategorySelected) {
      playSound(sounds.error, isMuted);
      return;
    }

    const currentPlayer = turn;
    const emoji = getRandomEmoji(currentPlayer);
    const updatedBoard = [...board];
    const updatedMoves = { ...playerMoves };

    if (updatedMoves[currentPlayer].length === 3) {
      const removeIndex = updatedMoves[currentPlayer][0];
      updatedBoard[removeIndex] = null;
      updatedMoves[currentPlayer].shift();
      playSound(sounds.vanish, isMuted);
    }

    updatedBoard[index] = { emoji, player: currentPlayer };
    updatedMoves[currentPlayer].push(index);
    setBoard(updatedBoard);
    setPlayerMoves(updatedMoves);
    playSound(sounds.place, isMuted);

    for (let [a, b, c] of winningCombinations) {
      if (
        updatedBoard[a] &&
        updatedBoard[b] &&
        updatedBoard[c] &&
        updatedBoard[a].player === currentPlayer &&
        updatedBoard[a].player === updatedBoard[b].player &&
        updatedBoard[a].player === updatedBoard[c].player
      ) {
        setWinner(currentPlayer);
        playSound(sounds.win, isMuted);
        setScores((prev) => ({
          ...prev,
          [currentPlayer]: prev[currentPlayer] + 1,
        }));
        return;
      }
    }

    setTurn(currentPlayer === "player1" ? "player2" : "player1");
  };

  // const resetGame = () => {
  //   playSound(sounds.newGame, isMuted);
  //   setBoard(Array(9).fill(null));
  //   setPlayerMoves({ player1: [], player2: [] });
  //   setWinner(null);
  //   setTurn("player1");
  //   setPlayer1Category("");
  //   setPlayer2Category("");
  //   setIsCategorySelected(false);
  // };
  const resetGame = () => {
    playSound(sounds.newGame, isMuted);
    setBoard(Array(9).fill(null));
    setPlayerMoves({ player1: [], player2: [] });
    setWinner(null);
    setTurn("player1");
    setPlayer1Category("");
    setPlayer2Category("");
    setIsCategorySelected(false);
    setScores({ player1: 0, player2: 0 }); // 🆕 reset scores
    setPlayerNames({ player1: "Player 1", player2: "Player 2" }); // 🆕 reset names
    setEditingPlayer(null); // 🆕 stop editing mode if open
  };

  const newGame = () => {
    playSound(sounds.restart, isMuted);
    setBoard(Array(9).fill(null));
    // setTurn("player2")
    const nextStartingPlayer = turn === "player1" ? "player2" : "player1"
    // setStartingPlayer(nextStartingPlayer)
    setTurn(nextStartingPlayer)
    setPlayerMoves({ player1: [], player2: [] });
    setWinner(null);
  }
  // bg-white dark:bg-gray-900
  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] text-black dark:text-white flex flex-col items-center justify-center p-6">

      {!isCategorySelected ? (
        <div className="max-w-md space-y-6">
          <h1 className="text-4xl font-bold mb-4 text-center">🎮 Blink Tac Toe</h1>

          <button onClick={() => setShowSettings(!showSettings)} className="absolute top-4 right-4 text-white px-4 py-2 rounded">
            {showSettings ? "❌" : "⚙️"}
          </button>

          {showSettings && (
            <SettingsPanel
              isMuted={isMuted}
              setShowHelp={setShowHelp}
              showHelp={showHelp}
              toggleMute={() => setIsMuted(!isMuted)}
              isDark={isDark}
              toggleTheme={() => setIsDark(!isDark)}
            />
          )}

          <CategorySelector
            player="player1"
            selectedCategory={player1Category}
            emojiCategories={emojiCategories}
            onSelect={handleCategorySelect}
            playerName={playerNames.player1}
            isEditing={editingPlayer === "player1"}
            onEditToggle={() =>
              setEditingPlayer(editingPlayer === "player1" ? null : "player1")
            }
            onNameChange={(newName) =>
              setPlayerNames({ ...playerNames, player1: newName })
            }
          />

          <CategorySelector
            player="player2"
            selectedCategory={player2Category}
            emojiCategories={emojiCategories}
            onSelect={handleCategorySelect}
            playerName={playerNames.player2}
            isEditing={editingPlayer === "player2"}
            onEditToggle={() =>
              setEditingPlayer(editingPlayer === "player2" ? null : "player2")
            }
            onNameChange={(newName) =>
              setPlayerNames({ ...playerNames, player2: newName })
            }
          />

        </div>
      ) : (
        <>
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold">🏆 Scores</h2>
            <p>{playerNames.player1} {scores.player1} | {playerNames.player2} {scores.player2}</p>
          </div>

          <GameBoard board={board} onCellClick={handleCellClick} player1Name={playerNames.player1} player2Name={playerNames.player2} />
          <GameStatus turn={turn} winner={winner} onReset={resetGame} newGame={newGame} player1Name={playerNames.player1} player2Name={playerNames.player2} />
        </>
      )}
    </div>
  );
}
