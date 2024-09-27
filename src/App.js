import Login from "./Pages/Login";
import PropertyDescription from "./Pages/PropertyDescription";
import PropertySearchPage from "./Pages/PropertySearchPage";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Listings from "./Pages/Listings";
import Contact from "./Pages/Contact";
import AboutPage from "./Pages/About";
import UserDashboard from "./Pages/UserDashboard";
import Admin from "./Pages/Admin";
import AdminLogin from "./Pages/AdminLogin";

function App() {  
  return (
    <div>
        <Routes>
          <Route path="/" element={<PropertySearchPage />} />{" "}
          <Route path="/adminlogin" element={<AdminLogin />} />{" "}
          <Route path="/signup" element={<SignUp />} />{" "}
          <Route path="/contact" element={<Contact />} />{" "}
          <Route path="/admin" element={<Admin />} />{" "}
          <Route path="/about" element={<AboutPage />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/search/:_id" element={<PropertyDescription />} />:<></>{" "}
          <Route path="/listings" element={<Listings />} />{" "}
          <Route path="/profile" element={<UserDashboard />} />{" "}
        </Routes>
    </div>
  );
}

export default App;