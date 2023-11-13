import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { deletePost, fetchPost } from '../services/postService';

function PostDetails() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const json = await fetchPost(id);
        setPost(json);
      } catch (e) {
        console.log("An error occurred:", e);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const deletePostHandler = async () => {
    try {
      await deletePost(post.id);
      navigate("/");
    } catch (e) {
      console.error("Failed to delete the post: ", e)
    }
  };

  if (!post) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit</Link>
      {" | "}
      <Link to="/">Back to Posts</Link>
      {" | "}
      <button onClick={deletePostHandler}>Delete</button>
    </div>
  );
}

export default PostDetails;