import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import Tabs from './Tabs';

const Profile = () => {
  const [bannerUrl, SetBannerUrl] = useState(
    'https://placehold.co/1500x400?text=Placeholder+Image&bg=cccccc&fg=000000'
  );
  const [profileUrl, SetProfileUrl] = useState(
    'https://placehold.co/100x100?text=100x100&bg=cccccc&fg=000000'
  );

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      SetBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      SetProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="profile-container relative w-[95.3%] ml-[5rem]">
      <div className="profile-content relative">
        {/* Banner Section */}
        <img
          src={bannerUrl}
          alt="Background"
          className="profile-banner w-full h-60 object-cover "
        />
        <button className="profile-banner-edit-btn absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            className="hidden"
            onChange={handleBannerChange}
            accept="image/*"
          />
        </button>

        {/* Profile Section with Flex Layout */}
        <div className="profile-info-container flex items-start px-4 mt-[2rem] ">
          {/* Profile Picture Section */}
          <div className="profile-picture-section relative mr-6">
            <img
              src={profileUrl}
              alt="Channel Logo"
              className="profile-image w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
            />
            <button className="profile-picture-edit-btn absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
              <label htmlFor="profile-upload" className="cursor-pointer">
                <FaCamera size={20} />
              </label>
              <input
                type="file"
                id="profile-upload"
                className="hidden"
                onChange={handleProfileChange}
                accept="image/*"
              />
            </button>
          </div>

          {/* Profile Details Section - Now on the right */}
          <div className="profile-details flex-1 mt-3">
            <h1 className="profile-name text-2xl font-bold">Soumadip Majila</h1>
            <p className="profile-stats text-gray-600">1M views</p>
            <p className="profile-bio mt-2 text-gray-700">
              This is a short description of the YouTube channel. It gives an overview of the
              content and what viewers can expect.
            </p>
            <button className="profile-subscribe-btn mt-4 bg-red-600 text-white py-2 px-6 rounded hover:bg-red-500 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Profile;
