import React from 'react';
import AuthForm from '../components/AuthForm';

export default function LoginPage() {
  const handleLogin = async (data) => {
    const res = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}
