import React from 'react';
import InputForm from '../../Components/Input/Input';
import { GlobalContext } from '../../context/context-form';

import {
  FormContainer,
  FormTitle,
  FormSubTitle,
  FormContainerInputs,
  FormButton,
} from './style';

const Form = () => {
  const { name, setName, card, setCard, sector, setSector } =
    React.useContext(GlobalContext);

  const [sucess, setSucess] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [register, setRegister] = React.useState(null);

  React.useEffect(() => {
    let timer = null;
    if (sucess) {
      timer = setTimeout(() => {
        setSucess(false);
        console.log('timer');
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [sucess]);

  async function createNewUser() {
    const response = await fetch('http://localhost:3000/funcionarios/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: name,
        cartao: card,
        setor: sector,
      }),
    });
    setSucess(response.ok);
  }

  const checkNewUser = async () => {
    try {
      await fetch(`http://localhost:3000/funcionarios/${card}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const equili = data;
          if (equili.length >= 1) {
            setRegister(true);
          } else {
            createNewUser();
            setRegister(false);
          }
        });
    } catch (erro) {
      console.log(erro);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (validateCard(card)) {
      await checkNewUser();
    }
  }

  function validateCard(value) {
    if (value.length === 0) {
      setError('Preencha um valor no cartão');
      return false;
    } else if (!/^\d{4}$/.test(value)) {
      setError('Utilize 4 digitos do cartão!');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCard(target.value);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      {register ? <p>Usuário já cadastrado</p> : null}
      {sucess ? <p>Cadastro realizado com sucesso</p> : ''}
      {error ? <p>{error}</p> : null}
      <FormTitle>Crie sua conta</FormTitle>
      <FormSubTitle>Informe os dados</FormSubTitle>
      <FormContainerInputs>
        <InputForm
          value={name}
          setValue={setName}
          type={'text'}
          label={'Nome'}
        />
        <InputForm
          value={card}
          setValue={setCard}
          type={'number'}
          label={'Cartão'}
          handleBlur={handleBlur}
          error={error}
          validateCard={validateCard}
        />
        <InputForm
          value={sector}
          setValue={setSector}
          type={'number'}
          label={'Setor'}
        />
      </FormContainerInputs>

      <FormButton>CADASTRAR</FormButton>
    </FormContainer>
  );
};

export default Form;
