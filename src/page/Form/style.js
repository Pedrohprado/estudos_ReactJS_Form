import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 70px 20px 50px 20px;

  @media screen and (max-width: 500px) {
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
  width: 250px;
  padding: 10px 0px 10px 0px;

  border-radius: 25px;
  border: none;
  background-color: #225dfe;

  font-size: 1.4rem;
  font-weight: 600;
  color: white;
`;
