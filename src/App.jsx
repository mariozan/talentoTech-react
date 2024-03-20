import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Example from "./components/example";
import Footer from "./components/footer";
import Header from "./components/header";
import UserList from "./components/user/UserList";
import Login from "./components/auth/Login";
import UserFormCreate from "./components/user/UserFormCreate";
import UserFormEdit from "./components/user/UserFormEdit";

function App() {
  return (
    <>      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/create-user" element={<UserFormCreate />} />
          <Route path="/user/:id" element={<UserFormEdit />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
