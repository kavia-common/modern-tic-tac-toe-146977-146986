import React from 'react';
import Square from './Square';
import { theme } from '../theme';

/**
 * PUBLIC_INTERFACE
 * GameBoard
 * Renders a 3x3 grid of squares.
 * Props:
 * - squares: Array(9) of 'X' | 'O' | null
 * - onSquareClick: (index: number) => void
 * - winningLine: number[] | null (indices to highlight)
 */
export default function GameBoard({ squares, onSquareClick, winningLine }) {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    padding: '16px',
    background: `linear-gradient(180deg, ${theme.colors.gradientStart}, ${theme.colors.gradientEnd})`,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadow.lg
  };

  return (
    <div style={gridStyle} role="grid" aria-label="Tic Tac Toe board">
      {squares.map((val, idx) => {
        const highlight = Array.isArray(winningLine) ? winningLine.includes(idx) : false;
        return (
          <Square
            key={idx}
            value={val}
            onClick={() => onSquareClick(idx)}
            highlight={highlight}
          />
        );
      })}
    </div>
  );
}
