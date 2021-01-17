import React, { Fragment } from "react";

// Style imports
import { BoardContainer, Flex, Square, ResetButton } from "./styles";

const Board = (props) => {
  const { boardStatus, handleOnSquareClick, handleOnResetClick } = props;

  return (
    <BoardContainer>
      {boardStatus.map((row, i) => {
        return (
          <Flex key={i}>
            {row.map((cell, j) => {
              return (
                <Fragment key={j}>
                  {cell === "dead" && (
                    <Square disabled={true} type={cell}></Square>
                  )}
                  {cell === "alive" && (
                    <Square
                      onClick={() => handleOnSquareClick(i, j, cell)}
                      type={cell}
                    >
                      0
                    </Square>
                  )}
                  {cell === "hole" && (
                    <Square
                      onClick={() => handleOnSquareClick(i, j, cell)}
                      type={cell}
                    ></Square>
                  )}
                </Fragment>
              );
            })}
          </Flex>
        );
      })}
      <ResetButton onClick={handleOnResetClick}>Reset</ResetButton>
    </BoardContainer>
  );
};

export default React.memo(Board);
