import React from "react";

import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile,
  updateStatus,
  getStatus,
  savePhoto,
  saveProfile,
  goToEditMode,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    //debugger;
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.prop.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    //debugger;
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //debugger;
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    //debugger;
    return (
      <Profile
        {...this.props}
        isOwner={!!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
        isEditProfile={this.props.isEditProfile}
        goToEditMode={this.props.goToEditMode}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  isEditProfile: state.profilePage.isEditProfile,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
    goToEditMode,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
