import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import defaultAvatarka from "../../assets/images/avatarka.webp";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          debugger;
          let photos = response.data.data.photos;
          if (response.data.photos === undefined) photos = defaultAvatarka;
          let { email, id, login } = response.data.data;
          this.props.setAuthUserData(email, id, login, photos);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

//пропсы в обычную компоненту
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  photos: state.auth.photos,
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
