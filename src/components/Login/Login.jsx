import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />{" "}
        rememder me
      </div>
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
  const test = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={test} />
    </div>
  );
};

export default Login;
