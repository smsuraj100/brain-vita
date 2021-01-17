import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const RemainingMarbelsContainer = styled(Flex)`
  flex-direction: column;
`;

export const RemainingMarbelsTitle = styled.label`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

export const RemainingMarbels = styled.label`
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 16px;
`;

export const SubmitScoreContainer = styled(Flex)`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const UsernameInput = styled.input`
  width: 65%;
  height: 40px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  border: ${({ isValid }) =>
    isValid ? "2px solid #7fb5dd" : "2px solid #db0d16"};

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 30%;
  height: 46px;
  background-color: #0ba90b;
  color: white;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  border: 0;
  border-radius: 8px;
`;
