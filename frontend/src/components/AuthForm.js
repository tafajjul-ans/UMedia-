import React, { useState } from 'react';

export default function AuthForm({ type, onSubmit }) {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded w-full max-w-md mx-auto mt-20">
      <h2 className="text-2xl mb-4 text-center font-bold">{type === 'login' ? 'Login' : 'Register'}</h2>
      {type === 'register' && (
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
        {type === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
          }
  
