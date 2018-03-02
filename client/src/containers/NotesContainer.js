import { connect } from 'react-redux';
import Notes from '../components/Notes';
import * as actions from '../actions';

const mapDispatchToProps = {
  ...actions
};

export default connect(null, mapDispatchToProps)(Notes);
