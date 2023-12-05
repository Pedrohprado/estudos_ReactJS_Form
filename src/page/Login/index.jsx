import React from 'react';
import { GlobalContext } from '../../context/context-form';
import InputForm from '../../Components/Input/Input';

const Login = () => {
  const { name, setName, card, setCard, sector, setSector } =
    React.useContext(GlobalContext);

  async function verifyLogin() {
    console.log('teste');
    try {
      await fetch(`http://localhost:3000/logar/${name}?${card}?${sector}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: name,
          cartao: card,
          setor: sector,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (erro) {
      console.log(erro);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    verifyLogin();
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        value={name}
        setValue={setName}
        type={'text'}
        label={'Nome'}
        req={'required'}
      />
      <InputForm
        value={card}
        setValue={setCard}
        type={'number'}
        label={'Cartão'}
        req={'required'}
      />
      <InputForm
        value={sector}
        setValue={setSector}
        type={'number'}
        label={'Setor'}
        req={'required'}
      />
      <button>enviar</button>
    </form>
  );
};

export default Login;
