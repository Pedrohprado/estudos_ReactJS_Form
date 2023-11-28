/* eslint-disable react/prop-types */
import { InputLabel, InputMain } from './style';
import { FaRegAddressCard, FaPerson, FaIndustry } from 'react-icons/fa6';
const InputForm = ({ value, setValue, type, label }) => {
  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <InputLabel>
      {label === 'Nome' && <FaPerson size={30} />}
      {label === 'Cartão' && <FaRegAddressCard size={30} />}
      {label === 'Setor' && <FaIndustry size={30} />}

      {label}
      <InputMain type={type} value={value} onChange={handleChange} />
    </InputLabel>
  );
};

export default InputForm;
