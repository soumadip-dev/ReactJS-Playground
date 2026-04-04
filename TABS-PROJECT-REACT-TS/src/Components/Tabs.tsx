import { FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { useState } from 'react';
import { GoProjectSymlink } from 'react-icons/go';
import { SiCoursera } from 'react-icons/si';
import Card from './Card';
import About from './About';
import Contact from './Contact';

const tabs = [
  {
    id: 'home',
    icon: <FaHome />,
    label: 'Home',
    content: (
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm an MCA student with a passion for full-stack web development, eager to build
          real-world applications and expand my skills.
        </p>
        <img
          src="https://picsum.photos/id/1005/800/300"
          alt="Hero"
          className="mx-auto rounded-lg shadow-md"
        />
      </div>
    ),
  },
  {
    id: 'about',
    icon: <FaInfoCircle />,
    label: 'About',
    content: <About />,
  },
  {
    id: 'projects',
    icon: <GoProjectSymlink />,
    label: 'Projects',
    content: (
      <div className="card-grid-container flex flex-wrap gap-4">
        <Card
          title="Portfolio Website"
          description="A responsive portfolio site built with React and Tailwind CSS to showcase my skills and projects."
          image="https://picsum.photos/id/102/400/300"
          link="https://github.com/Soumadip-dev/portfolio"
        />
        <Card
          title="ToDo App"
          description="A task management app using React Hooks and local storage for persistent state."
          image="https://picsum.photos/id/1040/400/300"
          link="https://github.com/Soumadip-dev/todo-app"
        />
        <Card
          title="Weather Dashboard"
          description="Fetches weather info using OpenWeatherMap API. Made with vanilla JS and styled with Bootstrap."
          image="https://picsum.photos/id/1033/400/300"
          link="https://github.com/Soumadip-dev/weather-app"
        />
      </div>
    ),
  },
  {
    id: 'courses',
    icon: <SiCoursera />,
    label: 'Courses',
    content: (
      <div className="card-grid-container flex flex-wrap gap-4">
        <Card
          title="Data Structures and Algorithms"
          description="Hands-on learning of DSA fundamentals using Java. Focused on arrays, linked lists, trees, and more."
          image="https://picsum.photos/id/1011/400/300"
          link="#"
        />
        <Card
          title="Web Development Bootcamp"
          description="A full-stack course covering HTML, CSS, JavaScript, Node.js, and MongoDB."
          image="https://picsum.photos/id/1003/400/300"
          link="#"
        />
        <Card
          title="Java Programming"
          description="Coursework from MCA curriculum including OOP, multithreading, and JDBC."
          image="https://picsum.photos/id/1062/400/300"
          link="#"
        />
      </div>
    ),
  },
  {
    id: 'contact',
    icon: <FaPhone />,
    label: 'Contact',
    content: <Contact />,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="tabs-main-container p-4 mt-[3rem]">
      <div className="tabs-header-container flex border-b border-gray-300">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button flex-1 text-center py-3 px-4 font-medium text-sm ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            } transition-colors`}
          >
            <div className="tab-button-content flex items-center justify-center space-x-2">
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="tab-content-container mt-4 p-4 bg-white border border-gray-200">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
