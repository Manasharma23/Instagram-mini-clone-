import { useEffect, useState } from "react";
import API from "../api/axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const [p, setP] = useState(null);

  useEffect(() => {
    API.get(`/users/${id}`).then(res => setP(res.data));
  }, []);

  if (!p) return null;

  return (
    <>
      <h2>{p.username}</h2>
      <p>Followers: {p.followers}</p>
      <p>Following: {p.following}</p>
      {p.posts.map(post => <img key={post.id} src={post.image_url} width="100" />)}
    </>
  );
}
