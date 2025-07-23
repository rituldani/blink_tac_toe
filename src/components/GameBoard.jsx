// components/GameBoard.jsx
import { motion, AnimatePresence } from "framer-motion";

export default function GameBoard({ board, onCellClick }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((cell, index) => (
        <div
          key={index}
          onClick={() => onCellClick(index)}
          className="w-24 h-24 bg-gray-400 dark:bg-gray-800 flex items-center justify-center text-4xl cursor-pointer border-2 border-gray-600 transition-transform duration-200 hover:scale-105"
        >
          {/* {cell ? cell.emoji : ""} */}
          {cell ?
            (
              <AnimatePresence>
                {(
                  <motion.span
                    // key={emoji}
                    initial={{ scale: 0.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.2, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {cell.emoji}
                  </motion.span>
                )}
              </AnimatePresence>
            ) :
            ""
          }
        </div>
      ))}
    </div>
  );
}
