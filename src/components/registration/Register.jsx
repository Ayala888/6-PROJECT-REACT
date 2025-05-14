import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogReg } from './useLogReg';

export default function Register() {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    validateRegister,
  } = useLogReg();

  const [name, setName] = useState('');

  const handleRegister = () => {
    if (validateRegister(name)) {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = storedUsers.some((user) => user.email === email);
      if (userExists) {
        setError('Бұл email тіркелген. Кіру парағын қолданыңыз.');
        return;
      }

      const newUser = { name, email, password };
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      alert('Сәтті тіркелдіңіз!');
      navigate('/login');
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const inputClass = (fieldEmpty) =>
    `my-4 p-[15px] rounded-[10px] w-[350px] bg-black/20 ${
      fieldEmpty ? 'border-red-500' : 'border-white'
    } border text-white text-[15px] placeholder-white focus:outline-none focus:border-white`;

  const errorTextClass = 'text-red-500 text-[13px] text-left w-[350px] -mt-3 mb-2';

  return (
    <div className="text-white text-center text-xl flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-semibold mb-3">Тіркелу</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
        className="flex flex-col items-center"
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass(error && !name)}
        />
        {error && !name && <p className={errorTextClass}>Атыңызды енгізіңіз</p>}

        <input
          type="email"
          placeholder="Email: ****@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass(error && !email)}
        />
        {error && !email && <p className={errorTextClass}>Email енгізіңіз</p>}

        <input
          type="password"
          placeholder="Password: ******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass(error && !password)}
        />
        {error && !password && <p className={errorTextClass}>Құпиясөз енгізіңіз</p>}

        {error && email && password && name && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <button
          type="submit"
          className="my-4 p-[10px] rounded-[10px] w-[350px] bg-red-600 text-white text-[18px] hover:bg-red-700 transition"
        >
          Тіркелу
        </button>
      </form>

      <p className="mb-4 text-[17px]">ИЛИ</p>

      <button
        onClick={handleLogin}
        className="p-[10px] rounded-[10px] w-[350px] bg-white/30 text-white text-[18px] hover:bg-white/40 transition"
      >
        Кіру
      </button>
    </div>
  );
}








