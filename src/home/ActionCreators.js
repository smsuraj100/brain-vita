import {
  updateBoardStatus,
  updateFirstCord,
  updateSecondCord,
  isFirstCordSelected,
  resetBoard,
} from "./Actions";

export function updateBoardStatusAction(data) {
  return (dispatch) => {
    dispatch(updateBoardStatus(data));
  };
}

export function updateFirstCordAction(data) {
  return (dispatch) => {
    dispatch(updateFirstCord(data));
  };
}

export function updateSecondCordAction(data) {
  return (dispatch) => {
    dispatch(updateSecondCord(data));
  };
}

export function isFirstCordSelectedAction(data) {
  return (dispatch) => {
    dispatch(isFirstCordSelected(data));
  };
}

export function resetBoardAction() {
  return (dispatch) => {
    dispatch(resetBoard());
  };
}
