import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  margin-bottom: 20px;

  color: #fff;
`;

export const Input = styled.input`
   width: 100%;
  padding: 11px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 15px 10px 20px #333232;
  cursor: pointer;
  margin-top: 15px; 
  &:focus {
    outline: transparent;
    border: 1px solid #2196f3;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
`;
