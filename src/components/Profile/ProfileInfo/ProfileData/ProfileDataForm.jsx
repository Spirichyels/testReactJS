import React from "react";
import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ onSubmit, profile }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <button onSubmit={onSubmit}>save</button>
      </div>
      <b>Full name</b>:{createField("Full Name", "fullname", [], Input)}
      <div>
        <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
        {createField(
          "My professional skills",
          "lokingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me</b>:{createField("About me", "AboutMe", [], Textarea)}
      </div>
      {/* <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div> */}
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
