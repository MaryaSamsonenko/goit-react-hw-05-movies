import styled from 'styled-components';

export const Form = styled.form`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 28px;
`;

export const Input = styled.input`
  width: 280px;
  height: 40px;
  padding: 8px;
  border: 1px solid #99baed;
  border-radius: 6px;
  margin-right: 8px;
  outline: none;
  transition: border 300ms linear;
  &:focus {
    border: 1px solid #fbb400;
  }
`;

export const SearchButton = styled.button`
  display: block;
  padding: 8px 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  background-color: #99baed;
  border-radius: 6px;
  transition: all 300ms ease;
  &:hover {
    color: #fbb400;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
