import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();
  let addPost = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id}></Message>
  ));

  return (
    <div className={s.dialog}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea ref={newMessageElement}></textarea>
          <div>
            <button onClick={addPost}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
