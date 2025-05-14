import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { useLogReg } from '../registration/useLogReg';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { email, setEmail, password, setPassword, error, setError, validateLogin } = useLogReg();

  const handleLogin = () => {
    if (validateLogin()) {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

      const matchedUser = storedUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        login();
        navigate('/');
      } else {
        setError('Аккаунт табылмады.');
      }
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="text-white text-center text-xl flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-semibold mb-6">Кіру</h1>

      <input
        type="email"
        placeholder="Email: ****@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="my-4 p-3 rounded-xl w-85 bg-black/20 border border-white text-white text-base placeholder-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
      />

      <input
        type="text"
        placeholder="Password: ******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="my-4 p-3 rounded-xl w-85 bg-black/20 border border-white text-white text-base placeholder-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
      />

      {error && <p className="text-red-400 mt-2">{error}</p>}

      <button
        onClick={handleLogin}
        className="my-4 p-2 rounded-xl w-85 bg-red-600 text-white text-lg hover:bg-red-700 transition"
      >
        Кіру
      </button>

      <p className="mb-4 text-[17px] ">ИЛИ</p>

      <button
        onClick={handleRegister}
        className="p-2 rounded-xl w-85 bg-white/30 text-white text-lg hover:bg-white/40 transition"
      >
        Тіркелу
      </button>
    </div>
  );
}



