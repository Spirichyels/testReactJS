import React from "react";
import s from "../ProfileInfo.module.css";

import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ profile, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      <div>
        <b>About me</b>:{createField("About me", "AboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div>
              <b>
                {key}:{createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField("", "LookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills</b>:
        {createField(
          "My professional skills",
          "LookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>Full name</b>:{createField("Full Name", "Fullname", [], Input)}
      </div>
    </form>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};
const ProfileDataFormFromRedux = reduxForm({
  form: "edit-profile",
  destroyOnUnmount: false,
})(ProfileDataForm);

export default ProfileDataFormFromRedux;
