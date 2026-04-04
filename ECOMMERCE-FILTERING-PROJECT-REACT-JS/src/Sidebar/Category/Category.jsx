import './Category.css';
import Input from '../../components/Input';
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" onChange={handleChange} />
          <span className="checkmark"></span>All
        </label>
        <Input value="sneakers" title="Sneakers" name="test" handleChange={handleChange} />
        <Input value="flats" title="Flats" name="test" handleChange={handleChange} />
        <Input value="sandals" title="Sandals" name="test" handleChange={handleChange} />
        <Input value="heels" title="Heels" name="test" handleChange={handleChange} />
      </div>
    </div>
  );
};
export default Category;
