interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div className="card-container max-w-sm mx-auto my-4 bg-gray-900 border border-gray-800 shadow-lg overflow-hidden">
      <img className="card-image w-full h-48 object-cover" src={image} alt={title} />
      <div className="card-content p-6">
        <h2 className="card-title text-2xl font-bold text-white mb-3">{title}</h2>
        <p className="card-description text-gray-400 mb-5">{description}</p>
        <a
          href={link}
          className="card-button inline-block px-6 py-3 bg-white text-gray-900 font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 rounded-lg"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;