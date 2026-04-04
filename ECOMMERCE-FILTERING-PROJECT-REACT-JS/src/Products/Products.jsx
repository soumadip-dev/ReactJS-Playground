import Card from '../Components/Card';
import './Products.css';

const Products = ({ result }) => {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};
export default Products;
