const ProductItem = ({ data }) => {
  return (
    <div className="product-item">
      <h4>{data.name}</h4>
      <p>Price: ₹{data.price}</p>
    </div>
  );
};

export default ProductItem;
