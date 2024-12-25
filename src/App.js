import  { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import Category from './pages/Category';
import Author from './pages/Author';
import Source from './pages/Source';
import Settings from './pages/Settings';
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
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/author/:authorName" element={<Author />} />
            <Route path="/source/:sourceName" element={<Source />} />
          </Route>
        </Routes>
      </div>
    </Router>
 );
}

export default App;
