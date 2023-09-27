import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <Router>
      <div>
        <h1>React on Rails Blog</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
