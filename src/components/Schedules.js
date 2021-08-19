import ScheduleItem from "./ScheduleItem";


const Schedules = (props) => {
  
  const items = props.items;
  let itemsLists = items.map((item, index) => {
    return <ScheduleItem key={index} item={item} />;
  });

  return (
    <ul>
      {itemsLists}
    </ul>
  );

}


export default Schedules;