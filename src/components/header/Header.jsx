import React from 'react';
import { useTheme } from './useTheme';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`fixed top-0 left-0 w-full z-50 flex items-center justify-around p-6 md:p-2 lg:p-3 ${theme === 'light' ? 'bg-[#302f3f] text-white' : 'bg-[#302f3f] text-white'}`}>
      
      <div className="flex items-center gap-4">
        <Link to="/" className="text-2xl font-semibold text-pink-500">Dorama.AYA</Link>
      </div>

     
      <button 
        onClick={toggleTheme}
        className="flex items-center gap-3 bg-white/10 text-white px-5 py-1 rounded-md backdrop-blur-sm hover:bg-white/20 transition"
      >
        {theme === 'light' ? <FaSun /> : <FaMoon />}
        <span>Тема</span>
      </button>
    </header>
  );
}







