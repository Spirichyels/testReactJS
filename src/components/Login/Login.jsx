import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { requred } from "../../utils/validators/validators";

import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import styles from "../common/FormsControls/FormsControls.module.css";
import { type } from "@testing-library/user-event/dist/type";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [requred], Input)}

      {createField("Password", "password", [requred], Input, {
        type: "password",
      })}

      {createField(
        null,
        "rememberMe",
        [],
        Input,
        {
          type: "checkbox",
        },
        "rememder me"
      )}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField("Symbols from image", "captcha", [requred], Input)}

      {error && <div className={styles.formControlSummaryError}>{error}</div>}
      <div>
        <button>log in</button>
      </div>
      <div></div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    debugger;
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
