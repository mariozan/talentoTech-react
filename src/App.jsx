import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Example from "./components/example";
import Footer from "./components/footer";
import Header from "./components/header";
import UserList from "./components/user/UserList";
import UserForm from "./components/user/UserForm";
import Login from "./components/auth/Login";

function App() {
  return (
    <>      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/create-user" element={<UserForm />} />
          <Route path="/user/:id" element={<UserForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
