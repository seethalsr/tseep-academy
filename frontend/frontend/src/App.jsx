import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
