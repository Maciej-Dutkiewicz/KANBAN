import React from 'react';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';
import { createLane } from '../Lane/LaneActions';
import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { compose } from 'redux';

class Kanban extends React.Component {
  render() {
    const {lanes, createLane}= this.props;

    return (
      <div>
        <button className="add-lane"
        onClick={() => createLane({
          name: 'New lane'
        })}
        >Add lane</button>
        <Lanes lanes={lanes}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
  ...laneActions,
  createNote
};

Kanban.propTypes = {
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
)(Kanban);
