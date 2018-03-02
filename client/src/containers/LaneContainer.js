import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Lane from '../components/Lane';

console.log(actions);

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId =>
      state.notes.find(note => note.id === noteId)
    )
  };
};

const mapDispatchToProps = dispatch => {
  addNote: actions.createNote;
};

export default connect(mapStateToProps, mapDispatchToProps)(Lane);
