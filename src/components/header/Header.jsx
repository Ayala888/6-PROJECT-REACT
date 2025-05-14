import React from 'react';
import { useTheme } from './useTheme';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
    className={`fixed top-0 left-0 w-full z-50 flex items-center 
      justify-between lg:justify-start gap-4 lg:gap-230
      px-3 py-2 sm:px-4 sm:py-3 md:px-6 lg:px-50
      ${theme === 'light' ? 'bg-[#302f3f] text-white' : 'bg-[#302f3f] text-white'}`}
  >
      
      <div className="flex items-center">
        <Link
          to="/"
          className="text-lg sm:text-xl md:text-2xl font-semibold text-pink-500"
        >
          Dorama.AYA
        </Link>
      </div>

      {/* Тема ауыстыру*/}
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md backdrop-blur-sm hover:bg-white/20 transition"
      >
        {theme === 'light' ? (
          <FaSun className="text-base sm:text-lg" />
        ) : (
          <FaMoon className="text-base sm:text-lg" />
        )}
        <span className="text-xs sm:text-sm md:text-base">Тема</span>
      </button>
    </header>
  );
}









