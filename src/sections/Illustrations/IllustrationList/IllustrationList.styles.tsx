import styled from "styled-components";

const SectionWrapper = styled.div``;
const Wrapper = styled.div`
 padding: 0 60px;
  @media (min-width: 1600px) {
    padding: 0 140px;
  }
  @media (max-width: 1199px) {
    padding: 0 60px;
  }
  @media (max-width: 767px) {
    padding: 0 24px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 61px;
  @media screen and (max-width: 1199px) {
    flex-direction:  column;
    gap: 24px;
    margin-bottom: 24px;
  }
`
const ContentWrapper = styled.div`
    display:grid;
    grid-gap:26px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(1,minmax(0,1fr));
    @media screen and (min-width: 767px) {
      grid-template-columns: repeat(1,minmax(0,1fr));
    }
    @media screen and (min-width: 991px) {
      grid-template-columns: repeat(2,minmax(0,1fr));
    }
    @media screen and (min-width: 1199px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (min-width: 1600px) {
      grid-template-columns: repeat(4,minmax(0,1fr));
    }
`

const CategoryWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1199px) {
    overflow: auto;
  }

`

const Category = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.19px;
  @media screen and (max-width: 1199px) {
    font-size: 16px
  }
`

const ShowMoreText = styled.div`
    cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.19px;
  color: #A5A5A5;
  @media screen and (max-width: 1199px) {
    font-size: 14px
  }
`

const Styles = {
  SectionWrapper,
  Wrapper,
  TitleWrapper,
  ContentWrapper,
  CategoryWrapper,
  Category,
  ShowMoreText,
}

export default Styles