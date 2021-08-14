import { useState } from "react";
import styled from "styled-components";

const Nav = (props) => {

  // styled-components →
  const NavCoutainer = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 50px;
  `;

  const YearMonth = styled.h3`
    text-align: center;
    font-size: 30px;
    margin: 0;
  `;

  const Prev = styled.button`

  `;
  // ← styled-components


  return (
    <NavCoutainer>
      <button onClick={() => props.changeMonth("prev")}>＜</button>
      <YearMonth>
        <span>{props.dates.getFullYear()}</span>
        年
        <span> {props.dates.getMonth()+1}</span>
        月
      </YearMonth>
      <button onClick={() => props.changeMonth("next")}>＞</button>
    </NavCoutainer>
  );
}

export default Nav;