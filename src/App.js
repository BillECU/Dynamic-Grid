import React, { useState, useEffect } from "react";
import "./styles.css";

function DynamicGrid() {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [gridRows, setGridRows] = useState(10); // State for grid rows
  const [gridCols, setGridCols] = useState(10); // State for grid cols
  const [selectedCell, setSelectedCell] = useState(null);
  const [totalSelectedCells, setTotalSelectedCells] = useState(0);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    createGrid(); // Create initial grid on mount
  }, [gridRows, gridCols]); // Recreate grid when rows or cols change

  const createGrid = () => {
    const newGrid = [];
    for (let i = 0; i < gridRows; i++) {
      newGrid.push([]);
      for (let j = 0; j < gridCols; j++) {
        newGrid[i].push(false); // Initialize all cells to not selected
      }
    }
    setGrid(newGrid);
  };

  const handleCellClick = (row, col) => {
    const updatedGrid = grid.map((rowArr, i) =>
      rowArr.map((cellSelected, j) => {
        if (
          i >= Math.min(0, row - 1) &&
          i <= Math.min(rows - 1, row) &&
          j >= Math.min(0, col - 1) &&
          j <= Math.min(cols - 1, col)
        ) {
          return true; // Select cells in the range
        } else {
          return false; //Deselect other cells.
        }
      })
    );

    setGrid(updatedGrid);
    setSelectedCell({ row: row + 1, col: col + 1 });
    setTotalSelectedCells(calculateTotalSelectedCells(updatedGrid));
  };

  const calculateTotalSelectedCells = (currentGrid) => {
    let count = 0;
    currentGrid.forEach((row) => {
      row.forEach((cell) => {
        if (cell) {
          count++;
        }
      });
    });
    return count;
  };

  const handleUpdateGrid = () => {
    if (rows === gridRows && cols === gridCols) {
      return;
    }
    if (rows > 0 && cols > 0) {
      setGridRows(rows);
      setGridCols(cols);
      setTotalSelectedCells(0);
      setSelectedCell(null);
    } else {
      alert("Please enter valid row and column numbers (greater than 0).");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div id="grid-controls">
          Rows:{" "}
          <input
            type="number"
            id="rows"
            value={rows}
            min="1"
            onChange={(e) => setRows(parseInt(e.target.value))}
          />
          Columns:{" "}
          <input
            type="number"
            id="cols"
            value={cols}
            min="1"
            onChange={(e) => setCols(parseInt(e.target.value))}
          />
          <button onClick={handleUpdateGrid}>Update Grid</button>
        </div>
      </div>
      <div className="wrapper">
        <table>
          <tbody>
            {grid.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={cell ? "selected" : ""}
                    onClick={() => handleCellClick(i, j)}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="wrapper">
        <div className="container">
          <div id="selected-cell">
            {selectedCell
              ? `Selected coordinates (${selectedCell.col}, ${selectedCell.row})`
              : "No cell selected"}
          </div>
          <div id="total-cell">Total cells selected: {totalSelectedCells}</div>
        </div>
      </div>
    </div>
  );
}

export default DynamicGrid;
