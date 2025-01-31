# Hello World with React and Material UI

This is a simple “Hello World” project using React and Material UI to create a stylized button.

## Requirements

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/RobertPantoja/HelloWorld-ReactApp.git
   cd hello-world-react-material-ui
   ```
2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Use

1. Start the application:
   ```bash
   npm start
   # or
   yarn start
   ```
2. Open your browser and go to http://localhost:3000 to see the application running.

## Project Structure

    hello-world-react-material-ui/
    ├── public/
    │ ├─── index.html.
    │ └── ...
    ├─── src/
    │ ├─── App.js
    │ ├─── index.js
    │ ├─── index.css
    │ └── ...
    ├─── package.json
    └─── README.md

### Code Example

    export default function HelloWorld() {
        return (
            <div className='content'>
                <h1 className='title'>Hello, World!</h1>
                <Button variant='contained' size='large' className='button'>Welcome to my App</Button>
            </div>
        )
    }

## Contributions

All contributions are welcome! Please open an or an to discuss any changes you would like to make.
