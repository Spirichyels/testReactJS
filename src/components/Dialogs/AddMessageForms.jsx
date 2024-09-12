import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLentgthCreator, requred } from "../../utils/validators/validators";

const maxLength50 = maxLentgthCreator(50);
const AddMessageForms = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[requred, maxLength50]}
          component={Textarea}
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
export default reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForms);
