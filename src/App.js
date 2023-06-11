import { Routes, Route } from "react-router-dom";
import "./App.css";
import Film from "./pages/FilmPage/Film";
import { createContext, useCallback, useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import Details from "./pages/DetailPage/Details";
import NotFound from "./pages/NotFound";

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const storedTheme = localStorage.getItem("light");
    const initialTheme = storedTheme === "true" ? "light" : "dark";
    setTheme(initialTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("light", JSON.stringify(nextTheme === "light"));
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Routes>
          <Route path="/" element={<Film />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
