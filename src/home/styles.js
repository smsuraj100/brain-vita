import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const Square = styled(Flex)`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${({ type }) =>
    type === "dead" ? "#CCCCCC" : type === "alive" ? "#6FA8DC" : "#F3F3F3"};

  &:hover {
    background-color: pink;
  }
`;
