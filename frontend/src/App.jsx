import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegisterBiometric from "./components/RegisterBiometric";
import CheckAttendance from "./components/CheckAttendance";
import UserSelection from "./pages/UserSelection";
import AdminLogin from "./pages/AdminLogin";
import Auth from "./pages/Auth";
import OldUserLogin from "./pages/OldUserLogin";
import NewUserSignUp from "./pages/NewUserSignUp";
import FingerprintScan from "./pages/FingerprintScan";

function App() {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterBiometric />} />
        <Route path="/check-attendance" element={<CheckAttendance />} />
        <Route path="/user-selection" element={<UserSelection />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/old-user" element={<OldUserLogin />} />
        <Route path="/new-user" element={<NewUserSignUp />} />
        <Route path="/fingerprint-scan" element={<FingerprintScan />} />
      </Routes>
    </Router>
  );
}

export default App;
