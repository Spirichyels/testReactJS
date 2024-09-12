import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { requred } from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          validate={requred}
          name={"login"}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          validate={requred}
          name={"password"}
          component={Input}
        />
      </div>
      <div>
        <Field component={Input} type={"checkbox"} name={"rememberMe"} />{" "}
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
