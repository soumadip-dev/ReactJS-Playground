const Stats = ({ count }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center mt-6">
      <div className="text-xl font-medium text-gray-800">
        Total Count: <span className="text-blue-600 font-semibold">{count}</span>
      </div>
    </div>
  );
};

export default Stats;
