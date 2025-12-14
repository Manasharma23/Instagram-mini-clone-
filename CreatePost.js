import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();

  const post = async () => {
    await API.post("/posts", { image_url: image, caption });
    navigate("/");
  };

  return (
    <>
      <input placeholder="Image URL" onChange={e => setImage(e.target.value)} />
      <input placeholder="Caption" onChange={e => setCaption(e.target.value)} />
      <button onClick={post}>Post</button>
    </>
  );
}
