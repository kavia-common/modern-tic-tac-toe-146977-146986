import React from 'react';
import { theme } from '../theme';

/**
 * PUBLIC_INTERFACE
 * Scoreboard
 * Displays scores for X, O, and Ties.
 * Props:
 * - scores: { X: number, O: number, T: number }
 */
export default function Scoreboard({ scores }) {
  const wrapper = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    width: '100%'
  };

  const cardBase = {
    background: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadow.sm,
    padding: '12px',
    textAlign: 'center',
    transition: `transform ${theme.transition}, box-shadow ${theme.transition}`
  };

  const title = {
    fontSize: '12px',
    fontWeight: 700,
    color: theme.colors.textMuted,
    marginBottom: '6px',
    letterSpacing: '0.6px',
    textTransform: 'uppercase'
  };

  const value = (color) => ({
    fontSize: '24px',
    fontWeight: 900,
    color,
    lineHeight: 1
  });

  return (
    <div style={wrapper} aria-label="Scoreboard">
      <div style={cardBase}>
        <div style={title}>Player X</div>
        <div style={value(theme.colors.primary)}>{scores.X}</div>
      </div>
      <div style={cardBase}>
        <div style={title}>Ties</div>
        <div style={value('#334155')}>{scores.T}</div>
      </div>
      <div style={cardBase}>
        <div style={title}>Player O</div>
        <div style={value(theme.colors.secondary)}>{scores.O}</div>
      </div>
    </div>
  );
}
