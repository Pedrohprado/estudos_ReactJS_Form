/* eslint-disable react/prop-types */

const Radio = ({ options, value, setValue }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type='radio'
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Radio;
