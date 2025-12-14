import { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const load = async () => {
    const res = await API.get("/feed");
    setPosts(res.data);
  };

  useEffect(() => { load(); }, []);

  return posts.map(p => (
    <div key={p.id}>
      <Link to={`/post/${p.id}`}>
        <img src={p.image_url} width="200" />
      </Link>
      <p>{p.caption}</p>
    </div>
  ));
}
