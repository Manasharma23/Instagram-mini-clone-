import { useEffect, useState } from "react";
import API from "../api/axios";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    API.get(`/posts/${id}`).then(res => setPost(res.data));
  }, []);

  const addComment = async () => {
    await API.post(`/posts/${id}/comment`, { content: comment });
    window.location.reload();
  };

  if (!post) return null;

  return (
    <>
      <img src={post.image_url} width="250" />
      <p>{post.caption}</p>
      {post.comments.map(c => <p key={c.id}>{c.username}: {c.content}</p>)}
      <input onChange={e => setComment(e.target.value)} />
      <button onClick={addComment}>Comment</button>
    </>
  );
}
