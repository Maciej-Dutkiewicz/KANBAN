// Import Actions
import { CREATE_LANE, CREATE_LANES, UPDATE_LANE, DELETE_LANE, ATTACH_TO_LANE,
  DETACH_FROM_LANE, MOVE } from './LaneActions';
import _ from 'lodash'
// Initial State
const initialState = [];

export default function lanes(state = initialState, action) {
  switch (action.type) {
    case CREATE_LANE:
      return { ...state, [action.lane.id]: action.lane };
    case CREATE_LANES:
      return { ...action.lanes }
    case UPDATE_LANE:
      return { ...state, [action.updatedLine.id]: action.updatedLine };
    case DELETE_LANE:
      return _.omit(state, action.id);
    default:
      return state;
  }
}


export default LaneReducer;

// // Import Actions
// import {  } from './LaneActions';
//
// // Initial State
// const initialState = {};
//
// const LaneReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
//
// export default LaneReducer;
