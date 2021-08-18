import styled from 'styled-components';
import AddSchedule from './AddSchedule';
import { useState } from 'react';
import Schedules from './Schedules';

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

const Date = styled.div`
    text-align: center;
    margin-top: 5px;
    font-size: ${(props) => props.isToday ? '17px' : '12px'};
    font-weight: 500;
    color: ${(props) => props.isToday ? 'red' : '#000'};
    opacity: ${(props) => props.isThisMonth ? '1': '0.5' };
  `;

const Day = styled.div`
  text-align: center;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 5px;
  font-size: 12px;
`;
// ← styled-components

const DateBox = (props) => {
  const [addShow, setAddShow] = useState(false);
  const changeAddShow = () => {
    setAddShow(!addShow);
  }

  const data = []; 
  const [items, setItems] = useState(data);
  const addItems = (newItem) => {
    setItems([...items, newItem]);
  }
  //console.log(items[0]);

  return(
    <>
      <DateLi onClick={() => changeAddShow()}>
        {
          props.topDays ?
            <>
              <Day>{props.week}</Day>
              <Date
                isToday={props.isToday}
                isThisMonth={props.isThisMonth}
              >
                {props.date}
              </Date>
            </>
          :
          <Date
            isToday={props.isToday}
            isThisMonth={props.isThisMonth}
          >
            {props.date}
          </Date>
        }
        <Schedules items={items} />
      </DateLi>
      <AddSchedule 
        show={addShow}
        changeAddShow={changeAddShow}
        addItems={addItems}
        year={props.year}
        month={props.month}
        date={props.date}
      />
    </>
  );
}

export default DateBox;