import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile";
import PostDetail from "./pages/PostDetail";
import PrivateRoute from "./auth/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute><Feed /></PrivateRoute>} />
        <Route path="/create" element={<PrivateRoute><CreatePost /></PrivateRoute>} />
        <Route path="/profile/:id" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/post/:id" element={<PrivateRoute><PostDetail /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
