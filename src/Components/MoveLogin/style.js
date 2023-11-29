import styled from 'styled-components';

export const ContainerInk = styled.section`
  width: 30%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #225dfe;
  color: white;

  padding: 70px 20px 50px 20px;

  border-radius: 0px 25px 25px 0px;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100vh;
    padding: 0px;
    border-radius: 0px;
  }
`;

export const LoginTitleInk = styled.h1`
  font-size: 3rem;
  font-weight: 700;

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    font-size: 2rem;
  }
`;

export const LoginSubTitleInk = styled.h2`
  font-size: 1.9rem;
  font-weight: 700;

  color: white;
  margin: 100px 0px 30px 0px;

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    text-align: center;
  }
`;

export const LoginAcessTitleInk = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  @media only screen and (min-width: 701px) and (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

export const InkSectionLogin = styled.div`
  margin-top: 200px;
  padding: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InkButton = styled.button`
  width: 250px;
  padding: 10px 0px 10px 0px;

  border: 3px solid white;
  border-radius: 25px;

  font-size: 1.4rem;
  font-weight: 600;

  background-color: transparent;
  color: white;
  transition: background 0.5s;

  &:hover {
    background-color: white;
    color: #225dfe;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    width: 150px;
  }
`;
