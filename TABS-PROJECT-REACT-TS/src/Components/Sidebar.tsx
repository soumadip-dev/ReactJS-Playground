import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Sidebar = () => {
  return (
    <aside className="sidebar-container fixed top-0 left-0 h-screen w-20 bg-slate-900 text-white shadow-lg">
      <ul className="sidebar-menu p-4 flex flex-col justify-between items-center h-full">
        <div className="sidebar-top-section">
          <li className="sidebar-item mb-4 hover:bg-slate-800 rounded-lg p-2 transition-all">
            <div className="sidebar-icon-container">
              <FaHome className="sidebar-icon" size={20} />
            </div>
          </li>
          <li className="sidebar-item mb-4 hover:bg-slate-800 rounded-lg p-2 transition-all">
            <div className="sidebar-icon-container">
              <FaUser className="sidebar-icon" size={20} />
            </div>
          </li>
          <li className="sidebar-item mb-4 hover:bg-slate-800 rounded-lg p-2 transition-all">
            <div className="sidebar-icon-container">
              <FaSearch className="sidebar-icon" size={20} />
            </div>
          </li>
        </div>
        <div className="sidebar-bottom-section">
          <li className="sidebar-item hover:bg-slate-800 rounded-lg p-2 transition-all">
            <div className="sidebar-icon-container flex flex-col items-center">
              <IoMdSettings className="sidebar-icon mb-4" size={20} />
              <FaUser className="sidebar-icon" size={20} />
            </div>
          </li>
        </div>
      </ul>
    </aside>
  );
};
export default Sidebar;
