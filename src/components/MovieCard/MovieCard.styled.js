import styled from 'styled-components';

export const WrapperCard = styled.div`
  display: flex;
`;

export const MovieContentWrapper = styled.div`
  padding: 20px;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  text-transform: capitalize;
  color: #163561;
`;

export const MovieSubtitle = styled.h4`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #163561;
`;

export const MovieText = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #163561;
  opacity: 0.9;
`;
