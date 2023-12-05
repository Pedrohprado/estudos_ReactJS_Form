import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.form`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 70px 20px 50px 20px;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100vh;
    padding: 0;
  }
`;

export const FormTitle = styled.h1`
  font-size: 1.9rem;
  font-weight: 700;
`;

export const FormSubTitle = styled.h2`
  font-size: 1.2rem;
  color: #225dfe;
  margin-bottom: 50px;
`;

export const FormContainerInputs = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  margin-bottom: 30px;
`;

export const FormButton = styled.button`
  width: 150px;
  padding: 10px 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 25px;
  border: none;
  background-color: #225dfe;

  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
`;

export const AlertForm = styled.div`
  position: absolute;
  top: 0;

  width: 70%;
  height: 50px;
  color: ${(props) => props.color};
  background-color: #f5f5f5;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 500;

  border-radius: 0px 0px 7px 7px;
`;

export const Information = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const LinkForLogin = styled(Link)`
  font-size: 0.9rem;
  text-decoration: none;
  color: #225dfe;
`;
