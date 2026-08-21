import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  // Dark mode is currently forced.
  const [theme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;

    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  // Kept for future use, but does nothing while dark mode is forced.
  const toggleTheme = () => {};

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}