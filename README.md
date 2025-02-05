# Dynamic-Grid

# Dynamic Grid React App

This project is a simple React application that creates a dynamic grid (table) where users can:

- Specify the number of rows and columns.
- Click a button to update the grid dimensions.
- Click on a cell to highlight the area from (1, 1) to the clicked cell (including the cell itself) in blue.
- See the selected cell's coordinates and the total number of selected cells.

## Technologies Used

- React
- CSS

## Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/BillECU/Dynamic-Grid.git](https://github.com/BillECU/Dynamic-Grid.git)
    cd Dynamic-Grid
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## How to Run

1.  **Start the development server:**

    ```bash
    npm start
    ```

    This will start the React development server, and the application will be accessible in your browser (usually at `http://localhost:3000`).

## How to Use

1.  **Grid Controls:** Use the input fields to specify the desired number of rows and columns for the grid.
2.  **Update Grid:** Click the "Update Grid" button to redraw the grid with the new dimensions.
3.  **Cell Selection:** Click on any cell in the grid. This will highlight the area from (1, 1) to the clicked cell (including the cell itself) in blue.
4.  **Information Display:** Below the grid:
    - The "Selected coordinate" shows the row and column number of the initially clicked cell.
    - The "Total cells selected" displays the total number of cells currently highlighted in blue.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Submit a pull request.

## License

MIT License
