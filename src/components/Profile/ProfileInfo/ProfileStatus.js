import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    //status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
      status: this.props.status,
    });
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  diActivateEditMode = () => {
    //debugger;
    console.log("this:", this);
    this.setState({
      editMode: false,
    });
    this.props.updateUserStatus(this.state.status);
  };
  render() {
    return (
      <div>
        {!this.state.editMode === true ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              status = {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.diActivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
