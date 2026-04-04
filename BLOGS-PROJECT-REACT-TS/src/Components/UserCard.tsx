import { FaUserCircle } from 'react-icons/fa';

interface UserCardProps {
  person: {
    name: string;
    following: boolean;
  };
}

const UserCard = ({ person }: UserCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <FaUserCircle className="text-3xl text-gray-400" />
        <span className="font-medium text-gray-700">{person.name}</span>
      </div>
      <button
        className={`px-4 py-1.5 text-sm rounded-full font-medium transition-colors ${
          person.following
            ? 'bg-gray-800 text-white hover:bg-gray-700'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        {person.following ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default UserCard;
