import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 380px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 4px;
  border: 1px solid #e1e1e1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;
export const Avatar = styled.img`
  margin-top: 24px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 1px solid;
`;
export const NameHero = styled.p`
  margin-top: 24px;
  font-size: 24px;
  line-height: 1.33;
  font-weight: 600;
`;
export const Tag = styled.p`
   margin-top: 12px;
  font-size: 18px;
  line-height: 1.33;
  font-weight: 500;
  color: #808080;
`;
export const Location = styled.p`
  margin-top: 12px;
  font-size: 18px;
  line-height: 1.33;
  font-weight: 500;
  color: #808080;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 auto; 
  background-color: #ADD8E6;
`;
export const StatsItem = styled.li` 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    width: calc((100% - 9px) / 3);
    :not(:last-child) {
      border-right: 1px solid #808080;    
`;
export const Label = styled.span`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.33;
  color: #808080;
  font-weight: 600;
`;
export const Quantity = styled.span`
  font-size: 20px;
  line-height: 1.4;
  font-weight: 600;
`;