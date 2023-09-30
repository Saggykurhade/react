import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PageFound = () => {
  const router = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      router('/');
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [router]);

  return (
    <div>
      <h1>
        Page Not Found, redirecting you to the home page in {countdown}{' '}
        {countdown === 1 ? 'second' : 'seconds'}...
      </h1>
      <button onClick={() => router('/')}>Go to home</button>
    </div>
  );
};

export default PageFound;
