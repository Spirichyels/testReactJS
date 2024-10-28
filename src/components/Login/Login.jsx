import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { requred } from "../../utils/validators/validators";

import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import styles from "../common/FormsControls/FormsControls.module.css";
import { type } from "@testing-library/user-event/dist/type";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>{createField("Email", "email", [requred], Input)}</div>
      <div>
        {createField("Password", "password", [requred], Input, {
          type: "password",
        })}
      </div>
      <div>
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
      </div>
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
