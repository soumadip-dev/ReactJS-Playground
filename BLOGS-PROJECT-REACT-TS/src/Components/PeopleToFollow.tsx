import UserCard from './UserCard';

const peopleToFollow = [
  { name: 'Ananya Kapoor', following: false },
  { name: 'Rohan Mehta', following: true },
  { name: 'Sneha Gupta', following: false },
  { name: 'Vikram Desai', following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="font-bold text-xl mb-6 text-gray-800">👥 People to follow</h3>
      <div className="space-y-5">
        {peopleToFollow.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};
export default PeopleToFollow;
