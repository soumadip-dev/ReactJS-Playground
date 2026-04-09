import { useNavigate } from 'react-router';
import { get } from './utils/http';
import { useEffect, useState, type ReactNode } from 'react';
import BlogPosts, { type BlogPost } from './components/BlogPosts';
import fetchingImage from '../../assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage';

type RawDataBlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function DataFetching() {
  const navigate = useNavigate();

  const [fetchedPost, setFetchedPost] = useState<BlogPost[]>();
  const [error, setError] = useState<string>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsFetching(true);
        const data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawDataBlogPost[];

        const blogPost: BlogPost[] = data.map(rawPost => ({
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        }));

        setFetchedPost(blogPost);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsFetching(false);
      }
    }
    getData();
  }, []);

  let content: ReactNode;

  if (fetchedPost) {
    content = <BlogPosts posts={fetchedPost} />;
  }

  if (isFetching) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <ErrorMessage text={error} />;
  }

  return (
    <>
      <button onClick={() => navigate('/')} className="backButton">
        ← Back
      </button>
      <div>
        <img
          src={fetchingImage}
          alt="An image of fetching"
          style={{ display: 'flex', margin: '0 auto', marginBottom: '2rem' }}
        />
        {content}
      </div>
    </>
  );
}
