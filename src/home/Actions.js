import * as types from "./ActionTypes";

/**
 * @description action for updating board status
 */
export const updateBoardStatus = (payload) => ({
  type: types.UPDATE_BOARD_STATUS,
  payload,
});

/**
 * @description action for updating co-ordinates for first tile
 */
export const updateFirstCord = (payload) => ({
  type: types.UPDATE_FIRST_CORD,
  payload,
});

/**
 * @description action for updating co-ordinates for second tile
 */
export const updateSecondCord = (payload) => ({
  type: types.UPDATE_SECOND_CORD,
  payload,
});

/**
 * @description action for toggling firstCordSelected flag
 */
export const isFirstCordSelected = (payload) => ({
  type: types.IS_FIRST_CORD_SELECTED,
  payload,
});

/**
 * @description action for resetting the board
 */
export const resetBoard = () => ({
  type: types.RESET_BOARD,
});
