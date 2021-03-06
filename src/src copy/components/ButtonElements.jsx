import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#1CC7D9' : '#040404')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px  48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#040404' : '#f4f4fc')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: ${({ primary }) => (primary ? '#f4f4fc' : '#1CC7D9')};
  }
`;

export const ButtonR = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#1cc7d9' : '#040404')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px  48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#040404' : '#f4f4fc')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#f4f4fc' : '#1CC7D9')};
  }
`;

export const ButtonS = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#1cc7d9' : '#040404')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px  48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#040404' : '#f4f4fc')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#f4f4fc' : '#1CC7D9')};
  }
`;
