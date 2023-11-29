/* eslint-disable react/prop-types */
import { InputLabel, InputMain } from './style';
import { FaRegAddressCard, FaPerson, FaIndustry } from 'react-icons/fa6';
const InputForm = ({ value, setValue, type, label, handleBlur }) => {
  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <InputLabel>
      {label === 'Nome' ? (
        <FaPerson size={30} />
      ) : label === 'Cartão' ? (
        <FaRegAddressCard size={30} />
      ) : (
        <FaIndustry size={30} />
      )}

      {label}
      <InputMain
        onBlur={handleBlur}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={
          label === 'Cartão' ? 'ex: 0000' : label === 'Setor' ? 'ex: 2530' : ''
        }
      />
    </InputLabel>
  );
};

export default InputForm;
