import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Scoreboard from './components/Scoreboard';
import Controls from './components/Controls';
import { theme } from './theme';
import { calculateWinner, isDraw, nextPlayer, loadFromStorage, saveToStorage } from './utils/gameUtils';

// PUBLIC_INTERFACE
export default function App() {
  /** Ocean Professional themed Tic Tac Toe application */
  const EMPTY = useMemo(() => Array(9).fill(null), []);

  const [squares, setSquares] = useState(EMPTY);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winningLine, setWinningLine] = useState(null);
  const [scores, setScores] = useState(() => loadFromStorage('scores', { X: 0, O: 0, T: 0 }));

  // Persist scoreboard
  useEffect(() => {
    saveToStorage('scores', scores);
  }, [scores]);

  const currentPlayer = useMemo(() => nextPlayer(squares), [squares]);

  // PUBLIC_INTERFACE
  const handleSquareClick = (idx) => {
    // Ignore if occupied or game is over
    if (squares[idx] || isGameOver) return;

    const copy = squares.slice();
    copy[idx] = currentPlayer;
    setSquares(copy);

    // Evaluate result after placing the mark
    const winner = calculateWinner(copy);
    if (winner) {
      setIsGameOver(true);
      // find winning line again for highlight
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      const winLine = lines.find(([a, b, c]) => copy[a] && copy[a] === copy[b] && copy[a] === copy[c]) || null;
      setWinningLine(winLine);

      setScores((prev) => ({ ...prev, [winner]: (prev[winner] || 0) + 1 }));
      return;
    }
    if (isDraw(copy)) {
      setIsGameOver(true);
      setWinningLine(null);
      setScores((prev) => ({ ...prev, T: prev.T + 1 }));
    }
  };

  // PUBLIC_INTERFACE
  const newRound = () => {
    setSquares(EMPTY);
    setIsGameOver(false);
    setWinningLine(null);
  };

  // PUBLIC_INTERFACE
  const resetScore = () => {
    setScores({ X: 0, O: 0, T: 0 });
    newRound();
  };

  const statusText = isGameOver
    ? calculateWinner(squares)
      ? `Winner: ${calculateWinner(squares)}`
      : 'Tie game'
    : `Turn: ${currentPlayer}`;

  const statusColor =
    isGameOver && calculateWinner(squares) === 'X'
      ? theme.colors.primary
      : isGameOver && calculateWinner(squares) === 'O'
      ? theme.colors.secondary
      : '#10B981'; // green-ish for active turn

  return (
    <div className="app-shell" style={{ background: 'transparent' }}>
      <main className="card" role="main" aria-label="Tic Tac Toe">
        <header className="header">
          <div className="brand">
            <h1 className="title">Tic Tac Toe</h1>
            <p className="subtitle">Ocean Professional Edition</p>
          </div>
          <div className="badge">3 × 3</div>
        </header>

        <div className="statusbar" role="status" aria-live="polite">
          <div className="status">
            <span
              className="dot"
              style={{ background: statusColor, border: '1px solid rgba(0,0,0,0.06)' }}
            />
            <span style={{ fontWeight: 900 }}>{statusText}</span>
          </div>
          <div style={{ fontSize: 12, color: '#64748B', fontWeight: 700 }}>
            Smooth turns, subtle shadows, clean lines.
          </div>
        </div>

        <Scoreboard scores={scores} />

        <section className="grid-wrap">
          <GameBoard
            squares={squares}
            onSquareClick={handleSquareClick}
            winningLine={winningLine}
          />
        </section>

        <footer className="footer">
          <Controls onNewGame={newRound} onResetScore={resetScore} canNewGame={isGameOver} />
          <p className="footer-note">First move: X. Tap a square to play.</p>
        </footer>
      </main>
      <span className="visually-hidden">
        Use the buttons to start a new round or reset the scoreboard.
      </span>
    </div>
  );
}
