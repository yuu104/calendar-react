import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 22px;
`;

const InpContainer = styled.div`
  width: 85%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  padding-bottom: 5px;
`;

const Line = styled.div`
  position: relative; /*.text_underline::beforeの親要素*/
  border-top: 1px solid #c2c2c2; /*text3の下線*/
  margin-bottom: 0;
  width: 100%;
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
  ${Input}:focus + &::before,
  ${Input}:focus + &::after {
    width: 50%;
  }
`;

const AddSubSchedule = (props) => {

  const handleChange = (e) => {
    props.handleChange(e.target.value);
  }

  return (
    <Container>
      <Img src={props.img} />
      <InpContainer>
        <Input 
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={handleChange}
        />
        <Line></Line>
      </InpContainer>
    </Container>
  );
}

export default AddSubSchedule;