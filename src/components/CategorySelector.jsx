import { useRef, useEffect } from "react";

export default function CategorySelector({
  player,
  selectedCategory,
  emojiCategories,
  onSelect,
  playerName,
  isEditing,
  onEditToggle,
  onNameChange,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="mb-6">
      <h2 className="text-xl mb-2 font-semibold flex items-center gap-2 flex-wrap">
        {isEditing ? (
          <>
            <input
              ref={inputRef}
              type="text"
              value={playerName}
              onChange={(e) => onNameChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") onEditToggle();
              }}
              className="p-1 w-[100px] rounded bg-white text-black"
            />
            <button
              onClick={onEditToggle}
              className="text-sm"
              title="Save"
            >
              ✅
            </button>
          </>
        ) : (
          <>
            {playerName}
            <button
              onClick={onEditToggle}
              className="text-sm"
              title="Edit name"
            >
              ✏️
            </button>
            <span>: Choose Category</span>
          </>
        )}
      </h2>

      {/* Category Buttons */}
      <div className="flex gap-4 flex-wrap">
        {Object.keys(emojiCategories).map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(player, cat)}
            className={`px-4 py-2 rounded ${selectedCategory === cat
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
