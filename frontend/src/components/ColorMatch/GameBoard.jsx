import React, { useState, useEffect, useCallback } from "react";
import Block from "./Block.jsx";
import shuffleColor from "./shuffle.js";

const GameBoard = () => {
  const initialBlockColors = [
    "#E7E247", "#E7E247", "#3D3B30", "#3D3B30", "#4D5061", "#4D5061",
    "#5C80BC", "#5C80BC", "#EEB4B3", "#EEB4B3", "#2F242C", "#2F242C"
  ];

  const [activeBlock, setActiveBlock] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [selectedBlocks, setSelectedBlocks] = useState([...Array(initialBlockColors.length).keys()]);
  const [blockColors, setBlockColors] = useState(shuffleColor(initialBlockColors));
  const [initialView, setInitialView] = useState(true);

  useEffect(() => {
    // Reset selected blocks after 1 second on mount
    const timeout = setTimeout(() => {
      setSelectedBlocks([]);
      setInitialView(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Check if the game is over
    if (selectedBlocks.length === initialBlockColors.length && !initialView) {
      alert("Game Over! Resetting the game...");
      resetGame();
    }
  }, [selectedBlocks, initialView]);

  const resetGame = () => {
    setActiveBlock(null);
    setActiveColor(null);
    setSelectedBlocks([...Array(initialBlockColors.length).keys()]);
    setBlockColors(shuffleColor(initialBlockColors));
    setInitialView(true);

    // Reset selected blocks again after 1 second
    const timeout = setTimeout(() => {
      setSelectedBlocks([]);
      setInitialView(false);
    }, 1000);

    return () => clearTimeout(timeout);
  };

  const handleBlockClick = useCallback((index, color) => {
    if (activeBlock !== index) {
      setActiveBlock(index);
      setActiveColor(color);
      setSelectedBlocks(prevSelectedBlocks =>
        activeColor === color ? [...prevSelectedBlocks, activeBlock, index] : [...prevSelectedBlocks]
      );
    }
  }, [activeBlock, activeColor]);

  return (
    <div className="board">
      <div className="flex flex-wrap justify-center items-center max-w-[500px] mx-auto">
        {blockColors.map((color, index) => (
          <Block
            key={index}
            blockColor={color}
            blockIndex={index}
            activeBlock={activeBlock}
            setActiveBlockProp={handleBlockClick}
            selectedBlocks={selectedBlocks}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
