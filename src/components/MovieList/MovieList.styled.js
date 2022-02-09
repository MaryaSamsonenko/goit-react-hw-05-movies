import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, minmax(274px, 1fr));
`;
export const Img = styled.img`
  height: 169px;
`;
export const MovieLink = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  transition: color 250ms linear;
  color: #163561;

  &:hover {
    color: #fbb400;
  }
`;
export const WrapperLink = styled.div`
  padding: 8px 0;
`;
