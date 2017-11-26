import uuid from 'uuid';
// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
// Export Actions
// export function createNote(note) {
//   return {
//     type: CREATE_NOTE,
//     note: {
//       id: uuid.v4(),
//       ...note
//     }
//   };
// };
export function createNote(note) {
  return (dispatch) => {
    return callApi(`lanes/${laneId}/notes`, 'post', note).then(res => {
      dispatch({
        type: CREATE_NOTE,
        note: res
      });
    });
  };
};
// export function updateNote(updatedNote) {
//   return {
//     type: UPDATE_NOTE,
//     ...updatedNote
//   };
// };
export function updateNote(note) {
  return dispatch => {
    return callApi(`lanes/${laneId}/notes/${note._id}`, 'put', note).then(res => {
      dispatch({
        type: UPDATE_NOTE,
        note
      });
    });
  };
}

// export function deleteNote(id) {
//   return {
//     type: DELETE_NOTE,
//     id
//   };
// };
export function deleteNote(id) {
  return dispatch => {
    return callApi(`lanes/${laneId}/notes/${noteId}`, 'delete').then(res => {
      dispatch({
        type: DELETE_NOTE,
        id
      });
    });
  };
}
