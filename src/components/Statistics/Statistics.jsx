import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatistTitle,
  StatList,
  StatItem,
  StatLabel,
  Percentage
 
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (   
       <StatisticsSection>
      {title && <StatistTitle>{title}</StatistTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem  key={id}>
            <StatLabel >{label}</StatLabel>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>   
  )
};
    
     
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
};
