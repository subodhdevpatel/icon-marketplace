import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.h1`
  font: normal normal 600 16px/31px Poppins;
  letter-spacing: 0.15px;
  color: #000000;
  margin-bottom: 8px;  
`;

const ColorOptions = styled.div`
  display: flex;
  gap: 11px;
  margin-bottom: 20px;
`;

const ColorOption = styled.div`
  border-radius: 50%;
  background: ${(props) => props.color};
  width: 21px;
  height: 21px;
  cursor: pointer;
`;

const Styles = {
  Wrapper,
  Title,
  ColorOptions,
  ColorOption
};

export default Styles;
