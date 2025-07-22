import React, { useEffect, useState } from 'react';

export default function FeedPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts/feed")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Feed</h1>
      {posts.map(post => (
        <div key={post._id} className="mb-6 border p-4 rounded bg-white shadow">
          <img src={post.image} alt="" className="w-full mb-2 rounded" />
          <p className="font-bold">@{post.user.username}</p>
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
}
