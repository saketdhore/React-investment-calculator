const Input = ({ label, placeholder, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="number" onChange={onChange} required/>
    </div>
  );
};

export default Input;
