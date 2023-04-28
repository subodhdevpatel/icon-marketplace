import styled from "styled-components";

import { WrapperType } from "./IconsCard.types";

const Wrapper = styled.div<WrapperType>`
  position: relative;
  box-sizing: border-box;
  height: auto;
  border-radius: 10px;
  padding: 22px;
   width: calc(33.33% - 24px);
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
        width: calc(50% - 16px);
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`;

const FreeTag = styled.div`
  width: 38px;
  height: 18px;
  text-align: center;
  font-size: 11px;
  font-weight: bold;
  background: #00CBD0 0% 0% no-repeat padding-box;
  border-radius: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
    font: normal bold 18px/26px Poppins;
    letter-spacing: 0.19px;
    color: #000000;
    display: flex;
    align-items: center;
    gap: 13px;

    @media (max-width: 991px) {
        font-size: 16px;
    }
  `;
const Tag = styled.div`
text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 165px;
`;

const HeartIconWrapper = styled.div``;

const Count = styled.p`
  text-align: right;
  font: normal normal normal 16px/23px;
  letter-spacing: 0.15px;
  color: #919191;
`;

const CommentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Styles = {
  Wrapper,
  Content,
  Title,
  FreeTag,
  HeartIconWrapper,
  ImageWrap,
  CommentWrapper,
  Tag,
  Count
};

export default Styles;
