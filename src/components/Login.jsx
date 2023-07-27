import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mode, setMode] = useState('signIn');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errMessg, setErrMessg] = useState(null);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const URL_BASE = `https://web-production-57656.up.railway.app/users/${
    mode === 'signIn' ? 'login' : 'signup'
  }`;

  const handleClick = () => {
    if (mode === 'signIn') {
      setMode('signUp');
    } else {
      setMode('signIn');
    }
  };

  const submitHandler = async e => {
    e.preventDefault();
    setIsLoading(true);

    if (emailRef.current.value === '' && passwordRef.current.value === '') {
      setError(true);
      setIsLoading(false);
      return;
    }

    const data = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    try {
      const response = await axios.post(URL_BASE, data);
      const result = await response.data.data;
      localStorage.setItem('data', JSON.stringify(result));
      navigate('/main-app', { replace: true });
      setIsLoading(false);
    } catch (error) {
      setErrMessg(error.response.data.message);
      setIsLoading(false);
      setError(true);
    }
  };

  let CTA = 'Login';

  if (mode === 'signIn' && isLoading) {
    CTA = 'Logging in...';
  } else if (mode === 'signIn' && !isLoading) {
    CTA = 'Login';
  } else if (mode === 'signUp' && !isLoading) {
    CTA = 'Sign Up';
  } else if (mode === 'signUp' && isLoading) {
    CTA = 'Signing Up...';
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-10 py-20">
      <h1 className="text-2xl font-bold">
        {mode === 'signIn' ? 'Sign In' : 'Sign Up'}
      </h1>
      <label htmlFor="" className="text-lg font-bold">
        Email
        <input
          ref={emailRef}
          type="email"
          placeholder="example@gmail.com"
          className="block w-full text-base font-normal outline-none px-4 py-2 rounded-tl-md rounded-br-md"
        />
        {error && (
          <p className="text-red-500 text-xs font-normal">
            {errMessg ? errMessg : '*Try again with valid email'}
          </p>
        )}
      </label>
      <label htmlFor="" className="block text-lg font-bold">
        Password
        <input
          ref={passwordRef}
          type="password"
          className="block w-full text-base font-normal outline-none px-4 py-2 rounded-tr-md rounded-bl-md"
        />
        {error && (
          <p className="text-red-500 text-xs font-normal">
            {!errMessg && '*Try again with valid password'}
          </p>
        )}
      </label>
      <button className="bg-black text-white py-2 rounded-md">{CTA}</button>
      <p>
        {mode === 'signIn'
          ? "Don't have an account?"
          : 'Already have an account?'}{' '}
        <span
          onClick={handleClick}
          className="text-blue-500 font-semibold cursor-pointer"
        >
          {mode === 'signIn' ? 'Sign Up' : 'Sign In'}
        </span>{' '}
      </p>
    </form>
  );
};

export default Login;
