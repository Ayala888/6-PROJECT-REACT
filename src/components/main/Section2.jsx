import React, { useEffect, useState } from 'react';
import { Doramas } from './Doramas';
import { Link } from 'react-router-dom';

export default function Section2({ searchQuery, setSearchQuery }) {
  const doramas = Doramas();
  const [filteredDramas, setFilteredDramas] = useState(doramas);
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredDramas(doramas);
    } else {
      setFilteredDramas(
        doramas.filter(dorama =>
          dorama.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, doramas]);

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center tracking-wide text-pink-500 hover:text-fuchsia-500">
        Dorama
      </h2>


      <div className="flex flex-wrap justify-center items-center mb-8 gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          placeholder="Іздеу..."
          className="border border-gray-300 rounded-lg px-4 py-2
          w-[200px] sm:w-[240px] md:w-[280px] lg:w-[800px]
          focus:outline-none focus:ring-2 focus:ring-pink-400
          placeholder-gray-400 dark:placeholder-gray-300
          bg-white dark:bg-gray-900 text-black dark:text-white"
      />
        <button
          onClick={handleSearch}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Іздеу
        </button>
      </div>

      {/* Карточкалар */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDramas.map((dorama) => (
          <div
            key={dorama.id}
            className="text-center bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <Link to={`/dorama/${dorama.id}`}>
              <div className="w-full md:h-75 aspect-[3/4] overflow-hidden">
                <img
                  src={dorama.img}
                  alt={dorama.title}
                  className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="mt-2 mb-2 font-medium text-base text-pink-500 px-2 ">
                {dorama.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}









