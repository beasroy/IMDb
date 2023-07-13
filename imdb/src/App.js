
import './App.css';
import Home from './pages/Home';
import Signin from './pages/Signin';
import CategoryMovies from './pages/CategoryMovies';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { routePath } from './constants/route';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />}/>
        <Route path={routePath.categories} element={<CategoryMovies />}/>
        <Route path={routePath.invalid} element={<Home />}/>
        <Route path={routePath.signin} element={<Signin />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
