import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const StartWindowWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 600px;
  height: 350px;
`;

export const Header = styled.h1`
  font-size: 30px;
  font-weight: bold;
  background: none;
  text-align: center;
  color: #ffffff;
`;

export const Image = styled.img`
  width: 500px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const StartWindowInput = styled.input.attrs({
    type: "text",
    color: "#000000",
    placeholder: "Имя"
})`
  padding: 5px 10px;
  vertical-align: top;
  text-align: center;
  outline: none;
  font-weight: 500;
  font-size: 20px;
  background: none;
  color: #fff;
  border: none;
  border-bottom: 2px solid #fff;
  margin: 0 0 20px 0;
`;

export const Button = styled(StartWindowInput)`
  font-size: 20px;
  font-style: bold;
  border: 2px solid #fff;
  background: #fff;
  margin: 0 10px;
  width: 150px;
  color: #000;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  min-width: ${(props) => 20 * props.width}px;
  width: ${(props) => 20 * props.width}px;
  height: ${(props) => 20 * props.width}px;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid black;
`;

export const EndWindowWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
  width: 600;
  min-height: 470px;
  color: #fff;
  padding: 20px 20px 0px 20px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const EndWindowText = styled.span`
  font-size: 20px;
  text-align: left;
  margin-bottom: 10px;
`;

export const EndWindowContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 20px 0;
`;

export const RatingListWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 40%;
`;

export const RatingsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

export const RatingList = styled.ol`
  width: 100%;
  padding: 0;
`;

export const RatingListItem = styled.li`
  padding: 6px;
`;

export const PlayingFieldWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #31353a;
  outline: none;
`;

export const CenterSideWrapper = styled(PlayingFieldWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 80px;
  font-weight: bold;
`;

export const SideWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
`;

export const SideHeader = styled(Header)`
  margin-bottom: 50px;
  text-align: center;
  color: #ffffff;
`;

export const SideHeader1 = styled(Header)`
  margin-top: 560px;
  text-align: center;
  color: #ffffff;
`;

export const SideText = styled(SideHeader)`
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const FigureWrapper = styled.div`
  position: relative;
  width: ${({startWidth, width}) => startWidth * width}px;
  height: ${({startHeight, width}) => startHeight * width}px;
`;

export const SquareWrapper = styled.div.attrs(({x, y, color, width}) => ({
    style: {
        left: `${width * x}px`,
        top: `${width * y}px`,
        backgroundColor: color
    }
}))`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 10);
  border-radius: 8px;
`;
