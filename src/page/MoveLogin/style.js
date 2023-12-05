import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerInk = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  padding: 50px 10px;

  color: #225dfe;
  background-color: white;

  @media screen and (max-width: 700px) {
    background-color: #225dfe;
  }
`;

export const LoginTitleInk = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #225dfe;

  @media screen and (max-width: 700px) {
    color: white;
    margin-bottom: 30px;
  }
`;

export const LoginSubTitleInk = styled.h2`
  font-size: 1.9rem;
  font-weight: 700;
  color: #225dfe;

  @media screen and (max-width: 700px) {
    color: white;
    font-size: 1.5rem;
  }
`;

export const LoginAcessTitleInk = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: #225dfe;

  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const InkSectionLogin = styled.div`
  padding: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const InkButton = styled(Link)`
  width: 150px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 25px;

  font-size: 1rem;
  font-weight: 600;

  text-decoration: none;
  color: white;
  background-color: #225dfe;

  transition: background 0.7s;

  &:hover {
    background-color: white;
    color: #225dfe;
  }

  @media screen and (max-width: 700px) {
    background-color: white;
    color: #225dfe;
    width: 150px;
    height: 50px;
    font-size: 1.2rem;
  }
`;
