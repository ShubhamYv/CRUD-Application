import "./App.css";

// Components
import NavBar from "./components/NavBar";
import About from "./components/About";
import AllUser from "./components/AllUser";
import AddUser from "./components/AddUser";
import NotFound from "./components/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/all" element={<AllUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
