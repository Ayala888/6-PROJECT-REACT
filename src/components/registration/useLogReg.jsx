import { useState } from 'react';

export function useLogReg() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const validateRegister = (name) => {
    if (!name || name.trim() === '') {
      setError('Атыңызды енгізіңіз.');
      return false;
    }

    const emailValid = email.includes('@gmail.com');
    const passwordValid =
      /[0-9]/.test(password) &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[!@#$%^&*]/.test(password) &&
      password.length >= 6;

    if (!emailValid) {
      setError('Email дұрыс емес. @gmail.com белгісі керек.');
      return false;
    }

    if (!passwordValid) {
      setError(
        'Құпия сөз 6 таңбадан ұзын болуы керек, сан, әріп, үлкен әріп және арнайы символ болуы керек.'
      );
      return false;
    }

    setError('');
    return true;
  };

  
  const validateLogin = () => {
    if (!email || !password) {
      setError('Барлық өрістерді толтырыңыз.');
      return false;
    }
    setError('');
    return true;
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    validateRegister,
    validateLogin,
  };
}




