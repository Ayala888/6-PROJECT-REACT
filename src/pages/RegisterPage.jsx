import React from 'react';
import Register from '../components/Register/Register';


export default function RegisterPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="https://www.thefirsttimes.jp/admin/wp-content/uploads/5024/08/20240827-ichi-135003-1200x630.jpg"
        alt="phon"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[40%]"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-black/70 p-6 rounded-xl w-[400px] h-[550px] flex items-center justify-center text-white text-lg">
        <Register />
      </div>
    </div>
  );
}






