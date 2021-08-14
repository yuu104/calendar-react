import styled from 'styled-components';

const DateBox = (props) => {

  // styled-components →
  const DateLi = styled.li`
    list-style: none;
    height: 120px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.54);
    border-right: 1px solid rgba(0, 0, 0, 0.54);
    @media(min-width: 600px) {
      height: 155px;
    }
  `;

  const Day = styled.div`
    text-align: center;
    color: rgba(0, 0, 0, 0.54);
    margin-top: 5px;
    font-size: 12px;
  `;

  const Date = styled.div`
    text-align: center;
    margin-top: 5px;
    font-size: ${props.isToday ? '17px' : '12px'};
    font-weight: 500;
    color: ${props.isToday ? 'red' : '#000'};
    opacity: ${props.isThisMonth ? '1': '0.5' };
  `;
  // ← styled-components


  return(
    <DateLi>
      {
        props.topDays ?
          <>
            <Day>{props.week}</Day>
            <Date>{props.date}</Date>
          </>
        :
        <Date>{props.date}</Date>
      }
    </DateLi>
  );
}

export default DateBox;