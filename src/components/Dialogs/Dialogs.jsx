import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
//import { sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
	
	let state = props.dialogsPage;

	
	let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
	let messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id}></Message>
  ));
	let newMessageBody = state.newMessageBody;
  

	let onSendMessageClick = () => {
	props.sendMessage();
  }

  let onNewMessageChange = (e) => {
	let body = e.target.value;
	props.updateNewMessageBody(body);
  }

  return (
    <div className={s.dialog}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div><textarea
		  	placeholder = "Enter your message"
            onChange={onNewMessageChange}
            value={newMessageBody}
          />
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
