import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { requred } from "../../utils/validators/validators";

import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import styles from "../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          validate={requred}
          name={"email"}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          type="password"
          validate={requred}
          name={"password"}
          component={Input}
        />
      </div>
      <div>
        <Field component={Input} type={"checkbox"} name={"rememberMe"} />{" "}
        rememder me
      </div>
      {props.error && (
        <div className={styles.formControlSummaryError}>{props.error}</div>
      )}
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
