// components/SettingsPanel.jsx
import GameRules from "./GameRules.jsx";
export default function SettingsPanel({ isMuted, toggleMute, isDark, toggleTheme, showHelp, setShowHelp }) {
  return (
    <div className="absolute top-16 right-4 border rounded shadow p-4 w-64 z-50 bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-2">Settings</h2>
      <div className="flex items-center justify-between m-4">
        <span>{isMuted ? "🔇" : "🔈"} Sound</span>
        <button onClick={toggleMute} className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 dark:bg-gray-600 hover:dark:bg-gray-700">
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
      <div className="flex justify-between items-center m-4">
        <span>{isDark ? "🌑" : "🌕"} Theme</span>
        <button onClick={toggleTheme} className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 dark:bg-gray-600 hover:dark:bg-gray-700">
          {isDark ? "Light" : "Dark"}
        </button>
      </div>
      <button onClick={() => setShowHelp(!showHelp)} className="mb-4 text-sm underline text-yellow-400 hover:text-yellow-300">
        {showHelp ? "Hide Rules" : "Show Game Rules"}
      </button>
      {showHelp && <GameRules />}
    </div>
  );
}
