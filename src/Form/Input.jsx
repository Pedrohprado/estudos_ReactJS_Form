/* eslint-disable react/prop-types */

//NOTES: estamos utilizando o ...props, para estruturar as parametros exatamente iguais
// value={value}, required : esses são os valores que estão fragmentados
const Input = ({ label, id, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}: </label>
      <input
        type="text"
        id={id}
        //value={value}
        onChange={({ target }) => setValue(target.value)}
        //required
        {...props}
      />
    </>
  );
};

export default Input;
