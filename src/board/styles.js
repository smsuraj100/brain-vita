import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const BoardContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Square = styled.button`
  display: flex;
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${({ type }) => (type === "alive" ? "#6FA8DC" : "#FFF")};
  border: ${({ type }) => (type === "hole" ? "1px solid black" : 0)};
  margin: 2px;
  outline: none;
  border: 0;
  border-radius: 4px;
  margin: 2px;
  box-shadow: ${({ type }) =>
    type === "dead" ? "unset" : "0px 1px 2px 2px rgba(0, 0, 0, 0.75)"};

  &:hover {
    background-color: ${({ type }) => (type === "dead" ? "#FFF" : "pink")};
  }

  &:active {
    background-color: pink;
    box-shadow: 0 5px #666;
    transform: translateY(1px);
  }
`;

export const ResetButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 24px 0 10px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 8px;
  color: wheat;
  background-color: #a50e2a;
  border: 0;

  &:hover {
    background-color: #95001c;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #95001c;
    box-shadow: 0 5px #666;
    transform: translateY(2px);
  }
`;
