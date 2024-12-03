import React from "react";

import styles from "../../../common/FormsControls/FormsControls.module.css";

import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {" "}
        <button>save</button>
      </div>
      <div>
        {error && <div className={styles.formControlSummaryError}>{error}</div>}
      </div>
      <div>
        <b>About me</b>:{createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>
                {key}:{createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills</b>:
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>Full name</b>:{createField("Full Name", "fullName", [], Input)}
      </div>
    </form>
  );
};

const ProfileDataFormFromRedux = reduxForm({
  form: "edit-profile",
  destroyOnUnmount: false,
})(ProfileDataForm);

export default ProfileDataFormFromRedux;
