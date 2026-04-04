import { useBlogs, type Blog } from '../Shared/BlogContext';
import ArticleCard from './ArticleCard';

interface ArticleListProps {
  onEdit: (blog: Blog) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ onEdit }) => {
  const { blogs, deleteBlog } = useBlogs();

  return (
    <div className="space-y-6">
      {blogs.map(blog => (
        <ArticleCard
          key={blog.id}
          article={blog}
          onEdit={() => onEdit(blog)}
          onDelete={() => deleteBlog(blog.id)}
        />
      ))}
    </div>
  );
};
export default ArticleList;
