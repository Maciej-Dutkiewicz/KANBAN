
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { compose } from 'redux';
import ItemTypes from '../Kanban/itemTypes';
import { bindActionCreators } from 'redux';
import styles from './Note.css';

class Note extends React.Component {
  render() {
    const {connectDragSource, connectDropTarget, isDragging,
      onMove, id, editing, ...props} = this.props;
    const dragSource = editing ? a => a : connectDragSource;

    return dragSource(connectDropTarget(
      <li style={{
        opacity: isDragging ? 0 : 1
      }} {...props}>{props.children}</li>
    ));
  }
}

Note.propTypes = {
  children: PropTypes.any,
};

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();

    if(targetProps.id !== sourceProps.id) {
      targetProps.onMove({targetProps.id, sourceProps.Id});
    }
  }
};

const noteSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id
  }
};

export default compose(
  DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Note);



// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//
// // Import Style
// import styles from './Note.css';
//
// class Note extends Component {
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
// Note.propTypes = {
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Note);
