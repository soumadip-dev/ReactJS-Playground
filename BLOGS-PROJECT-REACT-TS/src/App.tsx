import { IoMdAddCircle } from 'react-icons/io';
import Navigation from './Components/Navigation';
import PeopleToFollow from './Components/PeopleToFollow';
import TopicsList from './Components/TopicsList';
import TrendList from './Components/TrendList';
import { BlogContextProvider, type Blog } from './Shared/BlogContext';
import { useState } from 'react';
import Modal from './Components/Modal';
import BlogForm from './Components/BlogForm';
import ArticleList from './Components/ArticleList';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | undefined>(undefined);

  const openModalForNewBlog = () => {
    setIsModalOpen(true);
    setEditingBlog(undefined);
  };

  const openModalForEditBlog = (blog: Blog) => {
    setIsModalOpen(true);
    setEditingBlog(blog);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogContextProvider>
        <Navigation />
        <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 gap-8">
          {/* Main content area - 2/3 width */}
          <div className="w-full lg:w-2/3">
            <button
              onClick={openModalForNewBlog}
              className="flex items-center bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg mb-6 transition-colors duration-200"
            >
              Add New Blog
              <IoMdAddCircle className="ml-2 text-lg" />
            </button>

            <ArticleList onEdit={openModalForEditBlog} />
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="hidden lg:block w-1/3">
            <div className="space-y-6 sticky top-6">
              <PeopleToFollow />
              <TrendList />
              <TopicsList />
            </div>
          </div>

          {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)}>
              <BlogForm existingBlog={editingBlog} onClose={() => setIsModalOpen(false)} />
            </Modal>
          )}
        </div>
      </BlogContextProvider>
    </div>
  );
};
export default App;
