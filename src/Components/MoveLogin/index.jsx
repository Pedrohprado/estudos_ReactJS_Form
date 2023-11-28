import {
  ContainerInk,
  LoginTitleInk,
  LoginSubTitleInk,
  LoginAcessTitleInk,
  InkSectionLogin,
  InkButton,
} from './style';
const MoveLogin = () => {
  return (
    <ContainerInk>
      <LoginTitleInk>INK. Tec</LoginTitleInk>

      <LoginSubTitleInk>Bem vindo de volta!</LoginSubTitleInk>
      <LoginAcessTitleInk>Acesse sua conta</LoginAcessTitleInk>

      <InkSectionLogin>
        <InkButton>ENTRAR</InkButton>
      </InkSectionLogin>
    </ContainerInk>
  );
};

export default MoveLogin;
