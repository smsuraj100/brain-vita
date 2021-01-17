import React, { useState, Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateBoardStatusAction,
  updateFirstCordAction,
  updateSecondCordAction,
  isFirstCordSelectedAction,
  resetBoardAction,
} from "./ActionCreators";

// utility imports
import { validateName } from "../utils";

// Style imports
import {
  RemainingMarbelsContainer,
  RemainingMarbelsTitle,
  RemainingMarbels,
  SubmitScoreContainer,
  UsernameInput,
  SubmitButton,
} from "./styles";

// lazy imports
const Board = lazy(() => import("../board"));

const Home = () => {
  const dispatch = useDispatch();

  const [marbelsLeft, setMarbelsLeft] = useState(32);
  const [username, setUsername] = useState("");
  const [isValidUserName, setIsValidUserName] = useState(true);

  const { boardStatus, firstCord, isFirstCordSelected } = useSelector(
    (state) => state.homepage
  );

  /**
   * method to toggle the first co-ordinate selected flag
   */
  const toggleFirstCordSelected = () =>
    dispatch(isFirstCordSelectedAction(!isFirstCordSelected));

  /**
   * Checks whether any valid moves are remaining on the board
   */
  const isValidMoveLeft = () => {
    let count = 0;
    boardStatus.forEach((row, i) =>
      row.forEach((ele, j) => {
        if (ele === "hole") {
          if (
            ((boardStatus[i] && boardStatus[i][j + 1]) === "alive" &&
              (boardStatus[i] && boardStatus[i][j + 2]) === "alive") ||
            (boardStatus[i] &&
              boardStatus[i][j - 1] === "alive" &&
              (boardStatus[i] && boardStatus[i][j - 2]) === "alive") ||
            ((boardStatus[i + 1] && boardStatus[i + 1][j]) === "alive" &&
              (boardStatus[i + 2] && boardStatus[i + 2][j]) === "alive") ||
            ((boardStatus[i - 1] && boardStatus[i - 1][j]) === "alive" &&
              (boardStatus[i - 2] && boardStatus[i - 2][j]) === "alive")
          ) {
            count++;
          }
        }
      })
    );
    return count > 0 ? true : false;
  };

  /**
   * method to calculate total remaining marbels
   */
  const calculateRemainingMarbles = () => {
    let count = 0;
    boardStatus.forEach((row) =>
      row.forEach((ele) => {
        if (ele === "alive") {
          count++;
        }
      })
    );
    return count;
  };

  /**
   * @param {Number} x: x-coordinate of the selected square on the board
   * @param {Number} y: y-coordinate of the selected square on the board
   * based on the co-ordinates of source and destination square
   * checks if the proposed move is valid or not
   */
  const isValidMove = (x, y) => {
    // check if the move is a diagonal move
    if (firstCord.x !== x && firstCord.y !== y) {
      alert("No Diagonal moves are allowed");
      return false;
    } else if (firstCord.x === x) {
      // if its a horizontal move, check whether the absolute distance is 2 and middle one is not blank square
      if (
        Math.abs(firstCord.y - y) === 2 &&
        boardStatus[firstCord.x][
          firstCord.y > y ? firstCord.y - 1 : firstCord.y + 1
        ] === "alive"
      ) {
        return true;
      } else {
        alert("Invalid Move!!!");
        return false;
      }
    } else if (firstCord.y === y) {
      // if its a vertical move, check whether the absolute distance is 2 and middle one is not blank square
      if (
        Math.abs(firstCord.x - x) === 2 &&
        boardStatus[firstCord.x > x ? firstCord.x - 1 : firstCord.x + 1][
          firstCord.y
        ] === "alive"
      ) {
        return true;
      } else {
        alert("Invalid Move!!!");
        return false;
      }
    }
  };

  /**
   * @param {Number} x: x-coordinate of the selected square on the board
   * @param {Number} y: y-coordinate of the selected square on the board
   * @param {Boolean} isHorizontalMove: horizontal move flag to decide the move type
   * update board matrices based on the move type
   */
  const updateBoardStatus = (x, y, isHorizontalMove) => {
    const temp = [...boardStatus];
    if (isHorizontalMove) {
      // replace source and adjecent square with blank tile and destination with bubble tile horizontally
      temp.map((row, i) => {
        if (i === firstCord.x) {
          row[firstCord.y] = "hole";
          row[firstCord.y > y ? firstCord.y - 1 : firstCord.y + 1] = "hole";
          row[y] = "alive";
          return row;
        } else return row;
      });
    } else {
      // replace source and adjecent square with blank tile and destination with bubble tile vertically
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
    // update the board status
    dispatch(updateBoardStatusAction([...temp]));
  };

  /**
   * @param {Number} x: x-coordinate of the selected square on the board
   * @param {Number} y: y-coordinate of the selected square on the board
   * @param {String} type: Selected square type
   * store the source and destination square co-ordinates
   * validate the proposed move and check if any valid moves are left
   */
  const handleOnSquareClick = (x, y, type) => {
    if (type === "dead") {
      return;
    } else if (!isFirstCordSelected) {
      if (type !== "hole") {
        toggleFirstCordSelected();
        dispatch(updateFirstCordAction({ x: x, y: y }));
      } else {
        alert("Please select approprite first tile!");
      }
    } else if (isFirstCordSelected) {
      if (type === "hole") {
        toggleFirstCordSelected();
        dispatch(updateSecondCordAction({ x: x, y: y }));
        if (isValidMove(x, y)) {
          updateBoardStatus(x, y, firstCord.x === x);
          setMarbelsLeft(calculateRemainingMarbles());
          if (!isValidMoveLeft()) {
            alert("no more moves left");
            handleOnResetClick();
          }
        }
      } else {
        alert("Please select blank tile!");
      }
    }
  };

  /**
   * method to dispatch reset action
   */
  const handleOnResetClick = () => {
    dispatch(resetBoardAction());
    setMarbelsLeft(32);
  };

  /**
   * @param {Event} e
   * methos to validate and store username
   */
  const handleOnUserNameChange = (e) => {
    const {
      target: { value },
    } = e;
    if (!validateName(value)) {
      setIsValidUserName(false);
      return;
    } else {
      setIsValidUserName(true);
      setUsername(value);
    }
  };

  /**
   * methos to send username and score on submit
   */
  const handleOnSubmitClick = () => {
    if (!isValidUserName) {
      alert("Please enter valid username!!");
      return;
    } else {
      console.log(
        "Username: " + username + " | Marbels Remaining : " + marbelsLeft
      );
    }
  };

  return (
    <Suspense fallback="">
      <h1>Brain Vita</h1>
      <RemainingMarbelsContainer>
        <RemainingMarbelsTitle>Marbels Remaining</RemainingMarbelsTitle>
        <RemainingMarbels>{marbelsLeft}</RemainingMarbels>
      </RemainingMarbelsContainer>
      <Board
        boardStatus={boardStatus}
        handleOnSquareClick={handleOnSquareClick}
        handleOnResetClick={handleOnResetClick}
      />
      <SubmitScoreContainer>
        <UsernameInput
          type="text"
          onChange={handleOnUserNameChange}
          isValid={isValidUserName}
          placeholder="Username"
        />
        <SubmitButton onClick={handleOnSubmitClick} disabled={!isValidUserName}>
          Submit
        </SubmitButton>
      </SubmitScoreContainer>
    </Suspense>
  );
};

export default React.memo(Home);
