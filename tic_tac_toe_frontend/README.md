# Tic Tac Toe – Ocean Professional

A modern, minimalist Tic Tac Toe game built with React, featuring a clean Ocean Professional theme with blue and amber accents, subtle shadows, rounded corners, smooth transitions, and gradient depth.

## Features

- 3×3 game board with interactive hover/press feedback
- Current turn indicator and winner/tie detection
- Persistent scoreboard (X, O, Ties) via localStorage
- Accessible UI with ARIA roles/labels
- Modern ocean-themed UI, responsive and centered layout
- Split components: GameBoard, Square, Scoreboard, Controls

## Scripts

- `npm start` – Start the development server
- `npm test` – Run tests
- `npm run build` – Production build

## Project Structure

- `src/components/Square.jsx` – Single grid cell
- `src/components/GameBoard.jsx` – 3×3 grid
- `src/components/Scoreboard.jsx` – Score display
- `src/components/Controls.jsx` – Action buttons
- `src/utils/gameUtils.js` – Game logic + storage helpers
- `src/theme.js` – Theme tokens
- `src/App.js` – App shell and state management
- `src/App.css` – Global ocean-themed styles
