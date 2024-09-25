import React, { useEffect, useState } from "react";

const ProfileStatusWIthHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateMode = () => {
    setEditMode(true);
  };

  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateMode}>
            Hooks: Ваш статус ={" "}
            {!props.status ? " Тут ваш статус" : props.status}
          </span>
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWIthHooks;
