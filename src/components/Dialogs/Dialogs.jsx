import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { addMessageActionCreator, uppdateNewMessagetActionCreator } from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messagesPage.messages.map((m) => (
    <Message message={m.message} id={m.id}></Message>
  ));

  let newMessageElement = React.createRef();
  let addMessage = () => {
    debugger;
	props.dispatch(addMessageActionCreator());
    debugger;
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = uppdateNewMessagetActionCreator(text);
	props.dispatch(action)
  };

  return (
    <div className={s.dialog}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.newMessageText}
          />
          <div>
            <button onClick={addMessage}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
