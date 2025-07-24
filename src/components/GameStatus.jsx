// components/GameStatus.jsx
export default function GameStatus({ turn, winner, onReset, newGame, player1Name, player2Name }) {
  return (
    <div className="text-center mt-4">
      <div className="mb-4 text-xl font-medium">Turn: {turn === "player1" ? player1Name : player2Name }</div>
      {winner && (
        <div className="mt-6 text-2xl font-bold text-green-400">
          🎉 {winner === "player1" 
               ?
                player1Name
               : 
                player2Name
              } Wins!
        </div>
      )}
      <button onClick={newGame} className="m-6 px-6 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 hover:dark:bg-gray-700 rounded">
        🔁Play Again
      </button>
      <button onClick={onReset} className="m-6 px-6 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 hover:dark:bg-gray-700-600 rounded">
        🔚 End Game
      </button>
    </div>
  );
}
