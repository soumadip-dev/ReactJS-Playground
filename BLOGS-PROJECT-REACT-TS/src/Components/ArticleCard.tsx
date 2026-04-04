import { FaBookmark, FaEdit, FaTrash } from 'react-icons/fa';
import { type Blog } from '../Shared/BlogContext';

interface ArticleCardProps {
  article: Blog;
  onDelete: () => void;
  onEdit: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onDelete, onEdit }) => {
  return (
    <div className="flex p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={article.image} alt={article.title} className="w-40 h-32 object-cover rounded-lg" />
      <div className="ml-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
          <div className="flex space-x-3">
            <button
              onClick={onEdit}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              aria-label="Edit article"
            >
              <FaEdit className="text-lg" />
            </button>
            <button
              onClick={onDelete}
              className="text-red-600 hover:text-red-800 transition-colors duration-200"
              aria-label="Delete article"
            >
              <FaTrash className="text-lg" />
            </button>
            <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
              <FaBookmark className="text-lg" />
            </button>
          </div>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-2">{article.description}</p>
        <div className="mt-auto">
          <span className="text-sm text-gray-500">
            {new Date(article.time).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
