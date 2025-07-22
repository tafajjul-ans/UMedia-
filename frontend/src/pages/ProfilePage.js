import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/profile/${id}`)
      .then(res => res.json())
      .then(data => setProfile(data));

    fetch(`http://localhost:5000/api/posts/user/${id}`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [id]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">@{profile.username}</h1>
      <p>{profile.bio}</p>
      <p className="text-sm text-gray-500">Followers: {profile.followers.length} | Following: {profile.following.length}</p>

      <h2 className="mt-6 mb-2 font-bold">Posts</h2>
      <div className="grid grid-cols-2 gap-4">
        {posts.map(p => (
          <img key={p._id} src={p.image} alt="" className="w-full rounded" />
        ))}
      </div>
    </div>
  );
}
