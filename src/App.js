import "./App.css";
import Film from "./components/Film";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("light", JSON.stringify(newTheme === "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Film />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
