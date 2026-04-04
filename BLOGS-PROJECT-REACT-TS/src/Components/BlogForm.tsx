import { useBlogs } from '../Shared/BlogContext';
import { useEffect, useState } from 'react';
import { type Blog } from '../Shared/BlogContext';

interface BlogFormProps {
  existingBlog?: Blog;
  onClose: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ existingBlog, onClose }) => {
  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || '');
  const [description, setDescription] = useState(existingBlog?.description || '');
  const [image, setImage] = useState(existingBlog?.image || '');
  const [time, setTime] = useState(existingBlog?.time || '');

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const handleSubmit = () => {
    const blog: Blog = {
      id: existingBlog ? existingBlog.id : Date.now(),
      title,
      description,
      image,
      time,
    };
    if (existingBlog) {
      updateBlog(blog);
    } else {
      addBlog(blog);
    }
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg w-full">
      <h3 className="font-semibold text-2xl mb-4 text-gray-800">
        {existingBlog ? 'Edit Blog' : 'Add New Blog'}
      </h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter blog description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            id="image"
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={e => setImage(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            id="time"
            type="date"
            value={time}
            onChange={e => setTime(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="flex justify-end mt-6 space-x-3">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {existingBlog ? 'Update Blog' : 'Add Blog'}
        </button>
      </div>
    </div>
  );
};
export default BlogForm;
