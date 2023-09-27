import './App.css'
import PostsList from './components/PostsList';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <h1>React on Rails Blog</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <PostsList />
      </div>
    </Router>
  )
}

export default App
