import styled from "styled-components";

//  styled-components →
const List = styled.li`
  list-style: none;
  font-size: 18px;
  color: white;
  background-color: rgb(121, 134, 203);
  padding-left: 5px;
  border-radius: 5px;
  margin-bottom: 2px;
`;
// ← styled-components

const ScheduleItem = (props) => {

  return (
    <List>
      {props.item.title}
    </List>
  );

}

export default ScheduleItem;