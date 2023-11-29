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

  const [error, setError] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCard(card)) {
      console.log('enviado');
    } else {
      console.log('não enviado');
    }
  }

  function validateCard(value) {
    console.log(value);

    if (value.length === 0) {
      setError('Preencha um valor no cartão');
      return false;
    } else if (!/^\d{4}$/.test(value)) {
      setError('Utilize 4 digitos do cartão!');
      return false;
    } else {
      console.log('entrou');

      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCard(target.value);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
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
        />
        <InputForm
          value={sector}
          setValue={setSector}
          type={'number'}
          label={'Setor'}
        />
      </FormContainerInputs>

      <FormButton>CADASTRAR</FormButton>
      {error}
    </FormContainer>
  );
};

export default Form;
