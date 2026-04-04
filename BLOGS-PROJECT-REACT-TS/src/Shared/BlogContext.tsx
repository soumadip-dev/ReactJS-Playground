import { createContext, useContext, useState, type ReactNode } from 'react';

export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
}

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}

interface BlogProviderProps {
  children: ReactNode;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogContextProvider({ children }: BlogProviderProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const addBlog = (blog: Blog) => {
    setBlogs([...blogs, blog]);
  };
  const updateBlog = (updatedBlog: Blog) => {
    setBlogs(blogs.map(blog => (blog.id === updatedBlog.id ? updatedBlog : blog)));
  };
  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
}

// Custom Hook to use the BlogContext
export function useBlogs() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogs must be used within a BlogProvider');
  }
  return context;
}
