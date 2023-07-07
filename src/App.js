import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Film from "./pages/FilmPage/Film";
import { createContext, useCallback, useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import Details from "./pages/DetailPage/Details";
import NotFound from "./pages/NotFoundPage/NotFound";
import Navigation from "./component/Navigation/MenuNav";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NewPage from "./pages/NewsPage/NewPage";

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const storedTheme = localStorage.getItem("light");
    const initialTheme = storedTheme === "true" ? "light" : "dark";
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("light", JSON.stringify(nextTheme === "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div>
          <Navigation />
        </div>

        <div className="">
          <div className="switch">
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>

          <Routes>
            <Route path="/detail/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewPage />} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
