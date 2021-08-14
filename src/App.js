import './App.css';
import DateBox from './components/DateBox';
import Nav from "./components/Nav";
import styled from 'styled-components';
import { useState } from 'react';



function App() {

  // styled-components →
  const Container = styled.div`
    margin: 10px;
  `;

  const DatesUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid rgba(0, 0, 0, 0.54);
    border-bottom: none;
    border-right: none;
    padding: 0;
  `;
  // ← styled-components

  const [dates, setDates] = useState(new Date());
  const days = [];
  const weeks = ["日", "月", "火", "水", "木", "金", "土"];
  let nowYear = dates.getFullYear();
  let nowMonth = dates.getMonth() + 1;
  let firstDate = new Date(nowYear, (nowMonth-1), 1);
  let firstDay = firstDate.getDay();
  let startDate = new Date(firstDate);
  startDate.setDate(firstDate.getDate() - firstDay);
  const thisMonth = (month) => {
    if (month === dates.getMonth()+1) return true;
    return false;
  }
  const askToday = (year, month, date) => {
    let today = new Date();
    if (year === today.getFullYear() && month === today.getMonth()+1 && date === today.getDate()) {return true;}
    return false;
  }

  for(let i = 0; i < 35; i++) {
    let year = startDate.getFullYear();
    let month = startDate.getMonth() + 1;
    let date = startDate.getDate();
    let isThisMonth = thisMonth(month);
    let isToday = askToday(year, month, date);
    if (i < 7) {
      days.push(<DateBox topDays="true" week={weeks[i]} year={year} month={month} date={date} isThisMonth={isThisMonth} isToday={isToday} />);
    } else {
      days.push(<DateBox year={year} month={month} date={date} isThisMonth={isThisMonth} isToday={isToday} />);
    }
    startDate.setDate(startDate.getDate() + 1);
  }

  const changeMonth = (key) => { // 月移動関数
    if (key === "prev") {
      let newDates = new Date(dates.setMonth(dates.getMonth() - 1));
      setDates(newDates);
    } else if (key === "next") {
      let newDates = new Date(dates.setMonth(dates.getMonth() + 1));
      setDates(newDates);
    }
  }


  return (
    <Container>
      <Nav dates={dates} changeMonth={changeMonth} />
      <DatesUl>
        {days}
      </DatesUl>
    </Container>
  );
}

export default App;
