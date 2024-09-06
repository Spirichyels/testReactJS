import React from "react";

import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile,
  updateUserStatus,
  getUserStatus,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    //debugger;
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
