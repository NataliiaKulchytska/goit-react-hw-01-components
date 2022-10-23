import styled from '@emotion/styled';
 import  colorFanction  from '../ColorFunction/ColorFunction';

export const StatisticsSection = styled.section`
  margin: 60px auto;  
  width: 380px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);
`;
export const StatistTitle = styled.h2`
  padding: 24px 0;
  text-align: center;
  font-size: 24px;
  line-height: 1.33;
  text-transform: uppercase;
  font-weight: 600;
  color: #646e69;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 1px;
`;
export const StatItem = styled.li`
 display: flex;
 flex-direction: column;
 width: 20%;
 text-align: center;
 background-color: ${colorFanction};
`;
export const StatLabel = styled.span`
  display: block;
  padding: 8px;
  font-size: 16px;
  line-height: 1.33;
  font-weight: 500;
  color: #FAF0E6;
`;
export const Percentage = styled.span`
  display: block;
  padding-bottom: 6px;
  font-size: 22px;
  line-height: 1.33;
  font-weight: 500;
  color: #FAF0E6;
`;