import Button from '../Components/Button';
import './Recommended.css';
const Recommended = ({ handleClick }) => {
  return (
    <>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button className="btns" onClick={handleClick}>
          All Products
        </button>
        <Button title={'Nike'} value={'Nike'} onClickHandler={handleClick} />
        <Button title={'Adidas'} value={'Adidas'} onClickHandler={handleClick} />
        <Button title={'Puma'} value={'Puma'} onClickHandler={handleClick} />
        <Button title={'Vans'} value={'Vans'} onClickHandler={handleClick} />
      </div>
    </>
  );
};
export default Recommended;
