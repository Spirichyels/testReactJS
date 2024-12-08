import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = ({
  profile,
  isOwner,
  status,
  updateStatus,
  savePhoto,
  saveProfile,
  isEditProfile,
}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
        isEditProfile={isEditProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
