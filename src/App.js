import './App.css';
import DateBox from './components/DateBox';
import Nav from "./components/Nav";
import AddSchedule from './components/AddSchedule';
import Edit from './components/Edit';
import styled from 'styled-components';
import { useState } from 'react';

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

function App() {

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

  // スケジュール追加
  const [addShow, setAddShow] = useState(false);
  const [addYear, setAddYear] = useState(null);
  const [addMonth, setAddMonth] = useState(null);
  const [addDate, setAddDate] = useState(null);
  const changeAddShow = (year, month, date) => {
    setAddYear(year);
    setAddMonth(month);
    setAddDate(date);
    setAddShow(!addShow);
  }

  // スケジュール確認
  const [editShow, setEditShow] = useState(false);
  const [item, setItem] = useState({});
  const changeEditShow = (i) => {
    setItem(i);
    setEditShow(!editShow);
  }

  // DateBoxコンポーネント表示
  for(let i = 0; i < 35; i++) {
    let year = startDate.getFullYear();
    let month = startDate.getMonth() + 1;
    let date = startDate.getDate();
    let isThisMonth = thisMonth(month);
    let isToday = askToday(year, month, date);
    if (i < 7) {
      days.push({
        topDays: true,
        week: weeks[i],
        year: year,
        month: month,
        date: date,
        isThisMonth: isThisMonth,
        isToday: isToday
      });
    } else {
      days.push({
        topDays: false,
        year: year,
        month: month,
        date: date,
        isThisMonth: isThisMonth,
        isToday: isToday
      });
    }
    startDate.setDate(startDate.getDate() + 1);
  }
  const [items , setItems] = useState([]);
  const addItem = (item) => {
    setItems([...items, item]);
  }
  const deleteItem = (i) => {
    let newItems = items.filter((item) => {
      return item !== i;
    });
    setItems(newItems);
  }
  const dateComponents = days.map((day) => {
    let year = day.year;
    let month = day.month < 10 ? "0" + day.month : day.month;
    let date = day.date < 10 ? "0" + day.date : day.date;
    const schedules = items.filter((item) => {
      return item.date === `${year}-${month}-${date}`;
    });
    return (
      <DateBox
        key={`${year}-${month}-${date}`}
        topDays={day.topDays}
        week={day.week}
        year={day.year}
        month={day.month}
        date={day.date}
        isThisMonth={day.isThisMonth}
        isToday={day.isToday}
        changeAddShow={changeAddShow} 
        schedules={schedules}
        changeEditShow={changeEditShow}
      />
    );
  }); 

  // 月移動関数
  const changeMonth = (key) => { 
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
        {dateComponents}
      </DatesUl>
      {addShow && <AddSchedule year={addYear} month={addMonth} date={addDate} changeAddShow={changeAddShow} addItem={addItem} />}
      {editShow && <Edit changeEditShow={changeEditShow} item={item} deleteItem={deleteItem} />}
    </Container>
  );
}

export default App;
