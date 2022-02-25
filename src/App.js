import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserContext from "./context/userContext";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [avatar, setAvatar] = useState("");
  const [selected, setSelected] = useState({});

  return (
    <UserContext.Provider
      value={{
        avatar,
        setAvatar,
        user,
        setUser,
        token,
        setToken,
        selected,
        setSelected,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/addContact" element={<AddContact />} />
          <Route path="/editContact/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
