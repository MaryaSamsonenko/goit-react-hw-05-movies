import styled from 'styled-components';

export const CastList = styled.ul`
  padding: 20px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
`;
export const CastImg = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
`;
export const CastTitle = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
   color: #163561;
   margin-top: 10px;
  
  }
`;
export const CastText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #163561;
 margin-top: 10px;
  }
`;
