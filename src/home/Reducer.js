import * as actionTypes from "./ActionTypes";

const boardInitStatus = [
  ["dead", "dead", "alive", "alive", "alive", "dead", "dead"],
  ["dead", "dead", "alive", "alive", "alive", "dead", "dead"],
  ["alive", "alive", "alive", "alive", "alive", "alive", "alive"],
  ["alive", "alive", "alive", "hole", "alive", "alive", "alive"],
  ["alive", "alive", "alive", "alive", "alive", "alive", "alive"],
  ["dead", "dead", "alive", "alive", "alive", "dead", "dead"],
  ["dead", "dead", "alive", "alive", "alive", "dead", "dead"],
];

const deepCloning = (arr) => {
  let temp = [];
  arr.map((row, i) => (temp[i] = [...row]));
  return temp;
};

const defaultState = {
  boardStatus: deepCloning(boardInitStatus),
  firstCord: null,
  secondCord: null,
  isFirstCordSelected: false,
  isValidMoveFlag: false,
  isHorizontalMove: false,
  isVerticalMove: false,
};

const HomePageReducer = function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_BOARD_STATUS:
      return {
        ...state,
        boardStatus: action.payload,
      };
    case actionTypes.UPDATE_FIRST_CORD:
      return {
        ...state,
        firstCord: action.payload,
      };
    case actionTypes.UPDATE_SECOND_CORD:
      return {
        ...state,
        secondCord: action.payload,
      };
    case actionTypes.IS_FIRST_CORD_SELECTED:
      return {
        ...state,
        isFirstCordSelected: action.payload,
      };
    case actionTypes.RESET_BOARD:
      return {
        ...state,
        boardStatus: deepCloning(boardInitStatus),
      };
    default:
      return state;
  }
};

export default HomePageReducer;
