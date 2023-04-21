import styled from "styled-components";

import { WrapperType } from "./SampleIllustrationCard.types";

const Wrapper = styled.div<WrapperType>`
  position: relative;
  box-sizing: border-box;
  width: 385px;
  height: 612px;
  border-radius: 10px;
  padding: 22px 28px 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${({ imageUrl }) => imageUrl});
  border-radius: 10px;
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font: normal normal bold 20px/31px;
  letter-spacing: 0.19px;
  color: #000000;
`;

const Count = styled.p`
  text-align: right;
  font: normal normal normal 16px/23px;
  letter-spacing: 0.15px;
  color: #919191;
`;

const Styles = {
  Wrapper,
  Content,
  Title,
  Count
};

export default Styles;
