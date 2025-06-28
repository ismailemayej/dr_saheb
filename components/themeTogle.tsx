"use client";
import { useTheme } from "@/context/ThemeContext";

type ThemeToggle = {
  className?: string;
};

const ThemeToggle = ({ className = "" }: ThemeToggle) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={toggleTheme}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
          theme === "dark" ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
