import uuid from 'uuid';
import callApi from '../../util/apiCaller';
import { lanes } from '../../../util/schema';
import { normalize } from 'normalizr';

// Export Constants
export const CREATE_LANE = 'CREATE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';
export const DELETE_LANE = 'DELETE_LANE';
export const DETACH_FROM_LANE = 'DETACH_FROM_LANE';
export const ATTACH_TO_LANE = 'ATTACH_TO_LANE';
export const MOVE = 'MOVE';

export function createLane(lane) {
  return (dispatch) => {
    return callApi('lanes', 'post', lane).then(res => {
      dispatch(createLanes({
        type: CREATE_LANE,
        lane: res
      }));
    });
  };
};
export function updateLane(lane) {
  return {
    type: UPDATE_LANE,
    ...lane
  };
};

export function deleteLane(id) {
  return {
    type: DELETE_LANE,
    id
  };
};
export function fetchLanes() {
  return (dispatch) => {
    return callApi('lanes').then(res => {
      const normalized = normalize(res.lanes, lanes);
      const { lanes, notes } = normalized.entities;

      dispatch(createLanes(lanes));
      dispatch(createNotes(notes));
    });
  };
}
export function attachToLane(laneId, noteId) {
  return {
    type: ATTACH_TO_LANE,
    laneId,
    noteId
  };
};
export function move({sourceId, targetId}) {
  return {
    type: MOVE,
    sourceId,
    targetId
  };
};
export function detachFromLane(laneId, noteId) {
  return {
    type: DETACH_FROM_LANE,
    laneId,
    noteId
  };
}
// Export Actions
// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//
// // Import Style
// import styles from './Kanban.css';
//
// class Kanban extends Component {
//   render() {
//     return (
//
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {};
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };
//
// Kanban.propTypes = {
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Kanban);
