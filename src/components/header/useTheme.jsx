import { useState, useEffect } from 'react';

export const useTheme = () => {
  const storedTheme = localStorage.getItem('theme') || 'light'; 
  const [theme, setTheme] = useState(storedTheme); 

  
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#f0f0f0' : '#21202a';
    

    if (theme === 'light') {
      document.body.classList.add('text-gray-900'); // light режимде
      document.body.classList.remove('text-white'); // dark режимде
    } else {
      document.body.classList.add('text-white'); // dark режимде
      document.body.classList.remove('text-gray-900'); // light режимде
    }

    localStorage.setItem('theme', theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};




