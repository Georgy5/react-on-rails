import { Route, Routes } from 'react-router-dom';
import PostsList from './PostsList';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/new" element={<h1>New Post Form</h1>} />
    </Routes>
  );
}

export default AppRoutes;