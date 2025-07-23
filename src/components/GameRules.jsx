// components/GameRules.jsx
export default function GameRules() {
  return (
    <div className="mb-6 p-4 rounded dark:bg-gray-800 text-sm text-left space-y-2 max-w-md w-full">
      <p className="font-semibold text-yellow-300">📝 Game Rules:</p>
      <ul className="list-disc ml-5 space-y-1">
        <li>Each player must pick a different emoji category.</li>
        <li>You get a random emoji from your category each turn.</li>
        <li>You can only have 3 emojis on the board at a time — oldest emoji vanishes.</li>
        <li>Get 3 emojis in a row to win.</li>
      </ul>
      <p className="text-xs text-gray-400">Tip: Hover over cells to see interaction.</p>
    </div>
  );
}
