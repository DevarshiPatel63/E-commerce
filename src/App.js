import './App.css';
import AppContextProvider from './context/AppContext';
import Home from './pages/Home';
import Favourite from './pages/Favourite'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <AppContextProvider> {/* Wrap your App component with AppContextProvider */}
      <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/fav' element={<Favourite/>}/>
        </Routes>
      </Router>
        
      </div>
    </AppContextProvider>
  );
}

export default App;
