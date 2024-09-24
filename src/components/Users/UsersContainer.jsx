import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import {
  setCurrentPage as setCurrentPage,
  toggleIsFollowingProgress as toggleIsFollowingProgress,
  requestUsers,
  follow,
  unFollow,
} from "../../redux/users-reducer";

import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <div>{this.props.isFetching ? <Preloader /> : null}</div>
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

// export default withAuthRedirect(
//   connect(mapStateToProps, {
//     follow,
//     unFollow,
//     setCurrentPage,
//     toggleIsFollowingProgress,
//     getUsers,
//   })(UsersContainer)
// );

export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers: requestUsers,
  }),
  withAuthRedirect
)(UsersContainer);
