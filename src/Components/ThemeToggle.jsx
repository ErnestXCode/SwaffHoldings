import { Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled
      aria-label="Dark mode is currently enabled"
      aria-disabled="true"
      className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-600 opacity-40"
    >
      <Sun size={17} />
    </button>
  );
}

export default ThemeToggle;