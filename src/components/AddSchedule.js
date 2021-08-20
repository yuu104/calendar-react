
import AddSubSchedule from './AddSubSchedule';
import styled from 'styled-components';
import { useState } from 'react';

// styled-components →
const Overlay = styled.div`
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadein-anim 0.1s linear forwards;
  opacity: 0;
  @keyframes fadein-anim {
    100% {
      opacity: 1;
    }
  }
`;

const Content = styled.form`
  z-index:2;
  width:50%;
  max-width: 370px;
  background:#fff;
  padding: 10px 20px;
  border-radius: 5px;
`;

const Close = styled.div`
  height: 40px;
  display: flex;
  align-items: top;
  justify-content: flex-end;

`;

const CloseContent = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  font-size: 27px;
  transition: all 0.2s;
  &:hover {
    background-color: rgba(0,0,0,0.1);
    cursor: pointer;
  }
`;

const Title = styled.input`
  box-sizing: content-box;
  border: none;
  width: 100%;
  font-size: 20px;
  padding: 0 0 5px 0;
  outline: none;
`;

const Line = styled.div`
  position: relative; /*.text_underline::beforeの親要素*/
  border-top: 1px solid #c2c2c2; /*text3の下線*/
  margin-bottom: 30px;
  &::before,
  &::after {
    position: absolute; 
    bottom: 0px; /*中央配置*/
    width: 0px; /*アニメーションで0pxから50%に*/
    height: 2px; /*高さ*/
    content: '';
    background-color: #005FFF; /*アニメーションの色*/
    transition: all 0.5s;
  }
  &::before {
    left: 50%;
  }
  &::after {
    right: 50%;
  }
  ${Title}:focus + &::before,
  ${Title}:focus + &::after {
    width: 50%;
  }
`;

const Img = styled.img`
  width: 15px;
  height: 15px;
`;

const Button = styled.div`
  float: right;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 10px;
  border: 1px solid rgb(121, 134, 203);
  border-radius: 5px;
  padding: 3px 10px;
  color: rgb(121, 134, 203);
  &:hover {
    background-color: #EEEEEE;
  }
`;
// ← styled-components


const AddSchedule = (props) => {

  let year = props.year;
  let month = props.month < 10 ? "0" + props.month : props.month;
  let date = props.date < 10 ? "0" + props.date : props.date;

  const [titleItem, setTitleItem] = useState("");
  const handleChangeTitle = (e) => {
    setTitleItem(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(titleItem == "") {
      setTitleItem("");
      setPlaceItem("");
      setExplainItem("");
      props.changeAddShow();
    } else {
      const newItem = {
      title: titleItem,
      date: dateItem,
      place: placeItem,
      explain: explainItem
      }
      props.addItem(newItem);
      setTitleItem("");
      setPlaceItem("");
      setExplainItem("");
      props.changeAddShow();
    }
  }

  const [dateItem, setDateItem] = useState(`${year}-${month}-${date}`);
  const handleChangeDate = (value) => {
    setDateItem(value);
  }
  const [placeItem, setPlaceItem] = useState("");
  const handleChangePlace = (value) => {
    setPlaceItem(value);
  }
  const [explainItem, setExplainItem] = useState("");
  const handleChangeExplain = (value) => {
    setExplainItem(value);
  }

  return (
    <Overlay>
      <Content>
        <Close>
          <CloseContent onClick={() => props.changeAddShow()}>
            <Img src={`${process.env.PUBLIC_URL}/close.svg`} />
          </CloseContent>
        </Close>
        <Title
          type="text"
          value={titleItem}
          placeholder="タイトルと日時を追加"
          name="title"
          onChange={handleChangeTitle}
        />
        <Line></Line>
        <AddSubSchedule
          type="date" 
          value={dateItem}
          img={`${process.env.PUBLIC_URL}/watch.svg`}
          handleChange={handleChangeDate}
        />
        <AddSubSchedule
          type="text"
          value={placeItem}
          placeholder="場所を追加"
          img={`${process.env.PUBLIC_URL}/map.svg`}
          name="place" 
          handleChange={handleChangePlace}
        />
        <AddSubSchedule
          type="text"
          value={explainItem}
          placeholder="説明を追加"
          img={`${process.env.PUBLIC_URL}/pen.svg`}
          name="explanation" 
          handleChange={handleChangeExplain}
        />
        <Button onClick={handleSubmit}>保存</Button>
      </Content>
    </Overlay>
    );
  
}

export default AddSchedule;