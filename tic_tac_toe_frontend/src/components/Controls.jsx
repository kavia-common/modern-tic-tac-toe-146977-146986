import React from 'react';
import { theme } from '../theme';

/**
 * PUBLIC_INTERFACE
 * Controls
 * Action buttons below the board.
 * Props:
 * - onNewGame: () => void
 * - onResetScore: () => void
 * - canNewGame: boolean
 */
export default function Controls({ onNewGame, onResetScore, canNewGame }) {
  const wrapper = {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '6px'
  };

  const btn = {
    border: 'none',
    borderRadius: theme.radius.sm,
    padding: '12px 16px',
    fontWeight: 700,
    cursor: 'pointer',
    color: 'white',
    transition: `transform ${theme.transition}, box-shadow ${theme.transition}, opacity ${theme.transition}`,
    boxShadow: theme.shadow.md
  };

  const primaryBtn = {
    ...btn,
    background: `linear-gradient(180deg, ${theme.colors.primary}, #1D4ED8)`
  };

  const secondaryBtn = {
    ...btn,
    background: `linear-gradient(180deg, ${theme.colors.secondary}, #D97706)`
  };

  const disabledStyle = (isDisabled) =>
    isDisabled
      ? { opacity: 0.7, cursor: 'not-allowed', boxShadow: 'none' }
      : {};

  return (
    <div style={wrapper} role="group" aria-label="Controls">
      <button
        style={{ ...primaryBtn, ...disabledStyle(!canNewGame) }}
        onClick={onNewGame}
        disabled={!canNewGame}
        aria-disabled={!canNewGame}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(1px)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        New Round
      </button>
      <button
        style={secondaryBtn}
        onClick={onResetScore}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(1px)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        Reset Score
      </button>
    </div>
  );
}
