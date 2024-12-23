import  { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import Preloader from "./components/Preloader/Preloader";
import { usePreloader } from "./hooks/usePreloader";
import { ToastContainer } from 'react-toastify';
import ProtectedRoutes from './components/guards/protectedRoutes';


function App() {
  const isLoading = usePreloader();

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route element={<ProtectedRoutes />}>
          </Route>
          {/* <Route path="/" element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} /> */}
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;
