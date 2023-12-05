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
      <LoginAcessTitleInk>
        Acesse sua conta ou faça o cadastro!
      </LoginAcessTitleInk>

      <InkSectionLogin>
        <InkButton to={'/login'}>ENTRAR</InkButton>
        <InkButton to={'/createdacount'}>CRIAR CONTA</InkButton>
      </InkSectionLogin>
    </ContainerInk>
  );
};

export default MoveLogin;
