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

  return (
    <FormContainer>
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
          type={'text'}
          label={'Cartão'}
        />
        <InputForm
          value={sector}
          setValue={setSector}
          type={'text'}
          label={'Setor'}
        />
      </FormContainerInputs>

      <FormButton>CADASTRAR</FormButton>
    </FormContainer>
  );
};

export default Form;
