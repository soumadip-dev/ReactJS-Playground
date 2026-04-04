import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <p className="text-gray-500">Loading...</p>;
  } else if (isError) {
    content = <p className="text-red-600">Error: {error}</p>;
  } else if (posts.length > 0) {
    content = posts.map(post => (
      <article
        key={post.id}
        className="mb-4 p-4 rounded-lg shadow-md border border-gray-200 bg-white"
      >
        <h2 className="text-xl font-semibold text-blue-800">{post.title}</h2>
        <p className="text-gray-700 mt-2">{post.body}</p>
      </article>
    ));
  } else {
    content = <p className="text-gray-500">No posts available.</p>;
  }

  return <section className="max-w-2xl mx-auto mt-8">{content}</section>;
};

export default Posts;
