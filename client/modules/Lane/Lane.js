import React, { Component, PropTypes } from 'react';
import NotesContainer from '../Note/NotesContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../Kanban/itemTypes';

// Import Style
import styles from './Lane.css';

class Lane extends Component {
  render() {
    const {connectDropTarget, lane, laneNotes, ...props} = this.props;
    return connectDropTarget(
      <div {...props}>
        <div
          className={styles.LaneHeader}
          onClick={() => props.updateLane({id: laneId, editing: true})}
        >
          <div className={styles.LaneAddNote}>
            <button onClick={props.addNote.bind(this, laneId)}>+</button>
          </div>
          <Edit className={styles.LaneName} editing={lane.editing}
                value={lane.name}
                onEdit={name => props.updateLane({id: laneId, name, editing: false})}
          />

          <div className={styles.LaneDelete}>
            <button onClick={this.props.deleteLane.bind(this, lane)}>x</button>
          </div>
        </div>
        <NotesContainer
          notes={laneNotes}
        />
      </div>
    );
  }
}

Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array
};
const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if(!targetProps.lane.notes.length) {
      targetProps.attachToLane(
        targetProps.lane.id,
        sourceProps.id
      );
    }
  }
};
export default Lane;

//
//
// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//
// // Import Style
// import styles from './Lane.css';
//
// class Lane extends Component {
//   render() {
//     return (
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
// Lane.propTypes = {
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Lane);
