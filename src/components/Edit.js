import styled from "styled-components";

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
  align-items: center;
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

const Img = styled.img`
  width: 17px;
  height: 17px;
  color: #DCDCDC;
`;

const TitleBox = styled.div`
  padding-left: 60px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 25px;
  font-weight: 500;
`;

const Date = styled.p`
  margin: 0 0 30px 0;
  opacity: 0.6;
`;

const Sub = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const SubTitle = styled.div`
  margin-left: 35px;
`;
// ← styled-components

const Edit = (props) => {

  return(
    <Overlay>
      <Content>
        <Close>
          <CloseContent onClick={() => {
            props.deleteItem(props.item);
            props.changeEditShow();
          }}>
            <Img src={`${process.env.PUBLIC_URL}/garbage.svg`} />
          </CloseContent>
          <CloseContent onClick={() => props.changeEditShow()}>
            <Img src={`${process.env.PUBLIC_URL}/close.svg`} />
          </CloseContent>
        </Close>
        <TitleBox>
          <Title>{props.item.title}</Title>
          <Date>{props.item.date}</Date>
        </TitleBox>
        {props.item.place !== "" ? 
          <Sub>
            <Img src={`${process.env.PUBLIC_URL}/map.svg`} /> 
            <SubTitle>{props.item.place}</SubTitle>
          </Sub>
          : null
        }
        {props.item.explain !== "" ?
          <Sub>
            <Img src={`${process.env.PUBLIC_URL}/pen.svg`} /> 
            <SubTitle>{props.item.explain}</SubTitle>
          </Sub>
          : null
        }
      </Content>
    </Overlay>
  );

}

export default Edit;