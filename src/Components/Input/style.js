import styled from 'styled-components';

export const InputLabel = styled.label`
  background-color: #f0f0f0;
  color: #878787;
  width: 60%;
  height: 50px;

  padding: 5px 10px 5px 10px;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 17px;

  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 7px;

  cursor: pointer;

  @media screen and (max-width: 700px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

export const InputMain = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  background-color: #f0f0f0;

  cursor: pointer;
`;
