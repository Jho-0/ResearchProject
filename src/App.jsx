//App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import LoginPage from "./pages/Loginpage";
import { useAuth } from "./context/AuthContext";
import DashboardPage from "./pages/DashboardPage";
import LogsPage from "./pages/LogsPage";
import ReportPage from "./pages/ReportPage";
import ManageUser from "./pages/ManageUser";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/" />;
};


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard-admin" element={<PrivateRoute element={<DashboardPage />} />} />
          <Route path="/monitor-visitor-logs" element={<PrivateRoute element={<LogsPage />} />} />
          <Route path="/generate-report" element={<PrivateRoute element={<ReportPage />} />} />
          <Route path="/manageuser-admin" element={<PrivateRoute element={<ManageUser />} />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;