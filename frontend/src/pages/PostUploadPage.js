import React, { useState } from 'react';

export default function PostUploadPage() {
  const [formData, setFormData] = useState({ image: '', caption: '', userId: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/posts/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    alert("Posted!");
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Create Post</h2>
      <input type="text" name="userId" placeholder="Your User ID" onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
      <input type="text" name="image" placeholder="Image URL" onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
      <textarea name="caption" placeholder="Caption" onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white py-2 w-full rounded">Post</button>
    </form>
  );
}
