import styled from "styled-components";
import ScheduleItem from "./ScheduleItem";

// styled-components →
const Ul = styled.ul`
  padding: 0 5px 0 0;
  margin-top: 8px;
  overflow-x: scroll;
  height: 70%;
  @media(min-width: 600px) {
    height: 77%;
  }
`;
// ← styled-components

const Schedules = (props) => {

  const items = props.items;
  let itemsLists = items.map((item, index) => {
    return <ScheduleItem key={index} item={item} changeEditShow={props.changeEditShow} />;
  });

  return (
    <Ul>
      {itemsLists}
    </Ul>
  );

}


export default Schedules;