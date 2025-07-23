// components/CategorySelector.jsx
export default function CategorySelector({ player, selectedCategory, emojiCategories, onSelect }) {
  return (
    <div>
      <h2 className="text-xl mb-2">Player {player === "player1" ? "1" : "2"}: Choose Category</h2>
      <div className="flex gap-4 flex-wrap">
        {Object.keys(emojiCategories).map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(player, cat)}
            className={`px-4 py-2 rounded ${
              selectedCategory === cat
                ? player === "player1"
                  ? "bg-pink-500"
                  : "bg-blue-700"
                : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 hover:dark:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
