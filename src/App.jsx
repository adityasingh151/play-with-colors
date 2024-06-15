import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");
  const [customColor, setCustomColor] = useState("");
  const [history, setHistory] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [gradient, setGradient] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleColorChange = (newColor) => {
    setColor(newColor);
    setHistory((prevHistory) => [newColor, ...prevHistory].slice(0, 5));
  };

  const addFavorite = () => {
    if (!favorites.includes(color)) {
      setFavorites([...favorites, color]);
    }
  };

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    handleColorChange(randomColor);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert('Color code copied to clipboard!');
  };

  const getColorName = (color) => {
    const colorNames = {
      "#ff0000": "Red",
      "#00ff00": "Green",
      "#0000ff": "Blue",
      "#ffff00": "Yellow",
      "#800080": "Purple",
      "#00ffff": "Cyan",
      "#ff00ff": "Magenta",
      "#ffa500": "Orange",
      "#ff69b4": "Pink",
      "#808000": "Olive"
    };
    return colorNames[color.toLowerCase()] || color;
  };

  const handleColorPickerBlur = () => {
    handleColorChange(customColor);
    setShowColorPicker(false); // Hide color picker after selecting color
  };

  const toggleGradient = () => {
    setGradient(!gradient);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div
      className={`w-full h-screen duration-200 ${darkMode ? 'bg-gray-900 text-white' : ''}`}
      style={{
        background: gradient ? `linear-gradient(135deg, ${color}, ${customColor})` : color
      }}
    >
      <header className="fixed w-full top-0 p-4 bg-gray-800 text-white text-center text-lg">
        Play with Colors
      </header>
      {showColorPicker && (
        <div className="fixed top-24 inset-x-0 px-2">
          <input
            type="color"
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
            onBlur={handleColorPickerBlur}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
          />
          <div
            className="w-8 h-8 rounded-full border-2 border-gray-600"
            style={{ backgroundColor: customColor }}
          ></div>
        </div>
      )}
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white dark:bg-gray-700 px-3 py-2 rounded-3xl">
          <button
            onClick={() => handleColorChange("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => handleColorChange("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => handleColorChange("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => handleColorChange("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => handleColorChange("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => handleColorChange("cyan")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>
          <button
            onClick={() => handleColorChange("magenta")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "magenta" }}
          >
            Magenta
          </button>
          <button
            onClick={() => handleColorChange("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => handleColorChange("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => handleColorChange("olive")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-gray-300"
          >
            Reset
          </button>
          <button
            onClick={toggleColorPicker}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "transparent", border: "1px solid #ccc" }}
          >
            Pick Color
          </button>
        </div>
      </div>
      <div className="fixed bottom-36 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white dark:bg-gray-700 px-3 py-2 rounded-3xl">
          <button
            onClick={generateRandomColor}
            className="outline-none px-4 py-1 rounded-full shadow-lg bg-gray-300 dark:bg-gray-600"
          >
            Random Color
          </button>
          <button
            onClick={copyToClipboard}
            className="outline-none px-4 py-1 rounded-full shadow-lg bg-gray-300 dark:bg-gray-600"
          >
            Copy Color Code
          </button>
          <button
            onClick={addFavorite}
            className="outline-none px-4 py-1 rounded-full shadow-lg bg-gray-300 dark:bg-gray-600"
          >
            Add to Favorites
          </button>
          <button
            onClick={toggleGradient}
            className="outline-none px-4 py-1 rounded-full shadow-lg bg-gray-300 dark:bg-gray-600"
          >
            {gradient ? 'Solid Background' : 'Gradient Background'}
          </button>
        </div>
      </div>
      {showFavorites && (
        <div className="fixed bottom-24 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white dark:bg-gray-700 px-3 py-2 rounded-3xl">
            {favorites.length > 0 ? (
              favorites.map((col, index) => (
                <button
                  key={index}
                  onClick={() => handleColorChange(col)}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{ backgroundColor: col }}
                >
                  {getColorName(col)}
                </button>
              ))
            ) : (
              <span className="text-gray-600">No favorites yet.</span>
            )}
          </div>
        </div>
      )}
      <div className="fixed bottom-12 inset-x-0 px-2">
        <button
          onClick={toggleFavorites}
          className="outline-none px-4 py-1 rounded-full shadow-lg bg-gray-300 dark:bg-gray-600"
        >
          {showFavorites ? 'Hide Favorites' : 'Show Favorites'}
        </button>
        <button
          onClick={toggleDarkMode}
          className="outline-none px-4 py-1 rounded-full shadow-lg bg-gray-300 dark:bg-gray-600 ml-2"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <footer className="fixed bottom-0 w-full text-center p-2 bg-gray-800 text-white">
        Made with love by Aditya
      </footer>
    </div>
  );
}

export default App;
