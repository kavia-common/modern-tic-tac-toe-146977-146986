import React from 'react';
import { theme } from '../theme';

/**
 * PUBLIC_INTERFACE
 * Square
 * A single tic-tac-toe square button.
 * Props:
 * - value: 'X' | 'O' | null
 * - onClick: () => void
 * - highlight: boolean (for winning line)
 */
export default function Square({ value, onClick, highlight = false }) {
  const isFilled = value !== null;

  const styles = {
    button: {
      width: '92px',
      height: '92px',
      borderRadius: theme.radius.md,
      border: `1px solid ${highlight ? theme.colors.secondary : theme.colors.border}`,
      background: theme.colors.surface,
      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 12px ${theme.colors.shadow}`,
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      transition: `transform ${theme.transition}, box-shadow ${theme.transition}, border-color ${theme.transition}`,
      userSelect: 'none',
      outline: 'none'
    },
    value: {
      fontSize: '40px',
      fontWeight: 800,
      letterSpacing: '0.5px',
      color: isFilled
        ? value === 'X'
          ? theme.colors.primary
          : theme.colors.secondary
        : theme.colors.textMuted,
      transition: `color ${theme.transition}`
    }
  };

  return (
    <button
      aria-label={`Board square ${value ?? 'empty'}`}
      style={styles.button}
      onClick={onClick}
      onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(1px)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 8px 20px ${theme.colors.shadow}`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `0 4px 12px ${theme.colors.shadow}`)}
    >
      <span style={styles.value}>{value ?? ''}</span>
    </button>
  );
}
