import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

import defaultAvatarka from "../../../assets/images/avatarka.webp";
import ProfileStatusWIthHooks from "./ProfileStatusWIthHooks";
import ProfileDataFormFromRedux from "./ProfileData/ProfileDataForm";
import { toggleIsEditProfile } from "../../../redux/profile-reducer";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
  isEditProfile,
  goToEditMode,
}) => {
  //let [editMode, setEditMode] = useState(isEditProfile);

  if (!profile) {
    return <Preloader />;
  }

  const mainPhotoSelectedOn = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    debugger;
    saveProfile(formData).then(() => {
      //isEditProfile = true;
    });
  };

  return (
    <div>
      <div className={s.postImg}></div>
      <div className={s.descriptionBlock}>
        {" "}
        <img
          src={!profile.photos.large ? defaultAvatarka : profile.photos.large}
        />
        <div>
          {isOwner ? (
            <></>
          ) : (
            <input type="file" onChange={mainPhotoSelectedOn} />
          )}

          <div></div>
          <div></div>
        </div>
        <div className={s.descriptionBlock}>
          <div>
            <div>
              <ProfileStatusWIthHooks
                status={status}
                updateStatus={updateStatus}
              />
            </div>
            {isEditProfile ? (
              <ProfileDataFormFromRedux
                initialValues={profile}
                profile={profile}
                onSubmit={onSubmit}
              />
            ) : (
              <ProfileData
                goToEditMode={goToEditMode}
                profile={profile}
                isOwner={isOwner}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner ? <></> : <button onClick={goToEditMode}>edit</button>}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>

      <div>
        <b>2Looking for a job</b>:{" "}
        {profile.lookingForAJobDescription ? "yes" : "no"}
      </div>
      {profile.lookingForAJobDescription && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>:{profile.aboutMe}
      </div>
      <div>
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
      </div>
    </div>
  );
};

// const ProfileDataForm = () => {
//   return <div>form</div>;
// };

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};

export default ProfileInfo;
