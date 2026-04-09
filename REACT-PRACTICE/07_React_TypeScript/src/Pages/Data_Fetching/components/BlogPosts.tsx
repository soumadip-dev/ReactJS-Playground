export type BlogPost = {
  id: number;
  title: string;
  text: string;
};

type BlogPostsProps = {
  posts: BlogPost[];
};

export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div
      id="blog-posts"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        backgroundColor: '#f9fafb',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '2rem',
          textAlign: 'center',
          letterSpacing: '-0.025em',
          borderBottom: '3px solid #e5e7eb',
          paddingBottom: '0.75rem',
        }}
      >
        Blog Posts
      </h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
