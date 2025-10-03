//
// Core game utilities: winner detection, next player, draw, and storage helpers
//

// PUBLIC_INTERFACE
export function calculateWinner(squares) {
  /** Determine the winner for a 3x3 board; returns 'X', 'O', or null */
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // cols
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6]
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// PUBLIC_INTERFACE
export function isDraw(squares) {
  /** Returns true if all cells are filled and there is no winner */
  return squares.every((s) => s != null) && !calculateWinner(squares);
}

// PUBLIC_INTERFACE
export function nextPlayer(squares) {
  /** Returns the symbol of the next player given current board */
  const xCount = squares.filter((s) => s === 'X').length;
  const oCount = squares.filter((s) => s === 'O').length;
  return xCount === oCount ? 'X' : 'O';
}

// PUBLIC_INTERFACE
export function loadFromStorage(key, fallback) {
  /** Load JSON from localStorage safely */
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

// PUBLIC_INTERFACE
export function saveToStorage(key, data) {
  /** Save JSON to localStorage safely */
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // ignore
  }
}
