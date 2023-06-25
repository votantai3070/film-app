import { Routes, Route } from "react-router-dom";
import "./App.css";
import Film from "./pages/FilmPage/Film";
import { createContext, useCallback, useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import Details from "./pages/DetailPage/Details";
import NotFound from "./pages/NotFound";
import Navigation from "./component/Navigation/MenuNav";
import ContactPage from "./pages/ContactPage/ContactPage";
import SlickSlider from "./component/ImageSlide/ImageSlider";
import HomePage from "./pages/HomePage/HomePage";

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
      <div>
        <div>
          <Navigation />
        </div>

        <div className="App" id={theme}>
          <div className="switch">
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>

          <Routes>
            <Route path="/detail/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
