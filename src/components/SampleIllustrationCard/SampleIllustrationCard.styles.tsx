import styled from "styled-components";

import { WrapperType } from "./SampleIllustrationCard.types";

const Wrapper = styled.div<WrapperType>`
  position: relative;
  box-sizing: border-box;
  width: calc(25% - 24px);
  height: auto;
  border-radius: 10px;
  padding: 22px 26px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${({ imageUrl }) => imageUrl});
  border-radius: 10px;
  background-color: white;
  @media (min-width: 1600px) {
    width: calc(25% - 24px);
  }
  @media (max-width: 1199px) {
      width: calc(33.33% - 22px);
  }
  @media (max-width: 991px) {
      width: calc(50% - 16px);
  }
  @media (max-width: 767px) {
      width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Title = styled.p`
font: normal bold 18px/26px Poppins;
letter-spacing: 0.19px;
color: #000000;
text-overflow: ellipsis;
overflow:hidden;
white-space: nowrap;  
@media (min-width: 1600px) {
    font: normal bold 20px/28px Poppins;
}
@media screen (max-width: 991px) {
    font: normal bold 16pxpx/22px Poppins;
}
`;

const Count = styled.p`
  text-align: right;
  font: normal normal normal 16px/23px;
  letter-spacing: 0.15px;
  color: #919191;
`;
const ImageWrap = styled.div``;
const ImageScale = styled.div`
  display: flex;
  justify-content: center;
`;
const ImageSmallWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
const ImgIcon = styled.div``;

const Styles = {
  Wrapper,
  Content,
  Title,
  ImageWrap,
  ImageScale,
  ImageSmallWrapper,
  ImgIcon,
  Count
};

export default Styles;
