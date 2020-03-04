import { connect } from 'react-redux';
import UserTopicsMenu from './user_topic_menu';


const mapStateToProps = ({ session }) => {
  return ({
    currentUser: session.currentUser
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTopics: () => dispatch(fetchTopics())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTopicsMenu)
