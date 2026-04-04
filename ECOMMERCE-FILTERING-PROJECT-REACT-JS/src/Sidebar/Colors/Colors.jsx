import Input from '../../components/Input';
import './Colors.css';
const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>All
        </label>
        <Input value="black" title="Black" name="test1" color="black" handleChange={handleChange} />
        <Input value="blue" title="Blue" name="test1" color="blue" handleChange={handleChange} />
        <Input value="red" title="Red" name="test1" color="red" handleChange={handleChange} />
        <Input value="green" title="Green" name="test1" color="green" handleChange={handleChange} />
        <Input value="white" title="White" name="test1" color="white" handleChange={handleChange} />
      </div>
    </>
  );
};
export default Colors;
