# Drag & Drop Management WebApp

This project is a basic drag and drop management app built with React and React DND (Drag and Drop) functionality. Users can move tasks between different status columns ("todo," "inProgress," and "done").

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/vsbuidev/reactDND.git
   ```

2. Navigate to the project directory:

   ```bash
   cd reactDND
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the app:

   ```bash
   npm start
   ```

   The app should be running at [http://localhost:3000](http://localhost:3000).

## Features

- Drag and drop tasks between columns.
- Alert message for incorrect task order.

## Project Structure

- **src/components**: Contains React components for the app.

  - `TaskManager.js`: Main component managing task columns.
  - `TaskColumn.js`: Component for each task column.
  - `TaskCard.js`: Component representing a task card.

- **src/styles.css**: Stylesheet for the app components.

## Dependencies

- React: JavaScript library for building user interfaces.
- React DND: Drag and Drop for React.

## Contributing

Feel free to contribute to the project by creating issues or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
