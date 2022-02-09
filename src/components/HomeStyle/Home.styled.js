import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
export const Button = styled.button`
  margin: 0 auto;
  margin-top: 28px;
  display: block;
  padding: 12px 20px;
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
export const TrendingTitle = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  margin-bottom: 28px;
  color: #163561;
`;
export const NotificationTitle = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #163561;
`;
export const GoBackLink = styled(Link)`
  margin-bottom: 28px;
  display: inline-block;
  padding: 12px 20px;
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
export const Hr = styled.hr`
  background-color: #163561;
`;
export const WrapperTitleLink = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  margin-bottom: 28px;
`;
export const TitleLink = styled(NavLink)`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  transition: color 250ms linear;
  color: #163561;
  &.active {
    color: #fbb400;
  }
`;
