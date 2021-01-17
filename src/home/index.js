import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateBoardStatusAction,
  updateFirstCordAction,
  updateSecondCordAction,
  isFirstCordSelectedAction,
  resetBoardAction,
} from "./ActionCreators";

// Style imports
import { Flex, Square } from "./styles";

const Home = () => {
  const dispatch = useDispatch();

  const { boardStatus, firstCord, isFirstCordSelected } = useSelector(
    (state) => state.homepage
  );

  const toggleFirstCordSelected = () =>
    dispatch(isFirstCordSelectedAction(!isFirstCordSelected));

  const isValidMove = (x, y) => {
    if (firstCord.x !== x && firstCord.y !== y) {
      console.log("No Diagonal moves are allowed");
      return false;
    } else if (firstCord.x === x) {
      if (
        Math.abs(firstCord.y - y) === 2 &&
        boardStatus[firstCord.x][
          firstCord.y > y ? firstCord.y - 1 : firstCord.y + 1
        ] === "alive"
      ) {
        console.log("Valid Move");
        return true;
      } else {
        console.log("Invalid Move!!!");
        return false;
      }
    } else if (firstCord.y === y) {
      if (
        Math.abs(firstCord.x - x) === 2 &&
        boardStatus[firstCord.x > x ? firstCord.x - 1 : firstCord.x + 1][
          firstCord.y
        ] === "alive"
      ) {
        console.log("Valid Move");
        return true;
      } else {
        console.log("Invalid Move!!!");
        return false;
      }
    }
  };

  const updateBoardStatus = (x, y, isHorizontalMove) => {
    const temp = [...boardStatus];
    if (isHorizontalMove) {
      temp.map((row, i) => {
        if (i === firstCord.x) {
          row[firstCord.y] = "hole";
          row[firstCord.y > y ? firstCord.y - 1 : firstCord.y + 1] = "hole";
          row[y] = "alive";
          return row;
        } else return row;
      });
    } else {
      temp.map((row, i) => {
        if (i === firstCord.x) {
          row[firstCord.y] = "hole";
          return row;
        }
        if (i === (firstCord.x > x ? firstCord.x - 1 : firstCord.x + 1)) {
          row[firstCord.y] = "hole";
          return row;
        }
        if (i === x) {
          row[y] = "alive";
          return row;
        }
        return row;
      });
    }
    dispatch(updateBoardStatusAction([...temp]));
  };

  const handleOnSquareClick = (x, y, type) => {
    if (type === "dead") {
      console.log("Please select approprite tile!");
      return;
    } else if (!isFirstCordSelected) {
      if (type !== "hole") {
        toggleFirstCordSelected();
        // setFirstCord({ x: x, y: y });
        dispatch(updateFirstCordAction({ x: x, y: y }));
      } else {
        console.log("Please select approprite first tile!");
      }
    } else if (isFirstCordSelected) {
      if (type === "hole") {
        toggleFirstCordSelected();
        dispatch(updateSecondCordAction({ x: x, y: y }));
        isValidMove(x, y);
        if (isValidMove(x, y)) {
          updateBoardStatus(x, y, firstCord.x === x);
        }
      } else {
        console.log("Please select blank tile!");
      }
    }
  };

  const handleOnResetClick = () => dispatch(resetBoardAction());

  //   console.log("isHorizontalMove: ", isHorizontalMove);
  //   console.log("isVerticalMove:", isVerticalMove);
  //   console.log("firstCord: ", firstCord);
  //   console.log("secondCord: ", secondCord);
  //   console.log("isFirstCordSelected: ", isFirstCordSelected);

  return (
    <div>
      {boardStatus.map((row, i) => {
        return (
          <Flex key={i}>
            {row.map((cell, j) => {
              return (
                <Fragment key={j}>
                  {cell === "dead" && (
                    <Square
                      onClick={() => handleOnSquareClick(i, j, cell)}
                      type={cell}
                    ></Square>
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
      <button onClick={handleOnResetClick}>Reset</button>
    </div>
  );
};

export default React.memo(Home);
