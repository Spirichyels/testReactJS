import React from "react";

import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
