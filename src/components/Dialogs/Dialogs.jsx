import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} id={m.id}></Message>
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialog}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormsRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForms = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder="Enter your message"
        />

        <div>
          <button>Send</button>
        </div>
      </div>
    </form>
  );
};
const AddMessageFormsRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForms);

export default Dialogs;
