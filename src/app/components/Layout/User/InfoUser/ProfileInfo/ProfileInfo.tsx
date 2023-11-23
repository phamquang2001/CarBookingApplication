import React, { useEffect, useState } from 'react';
import './ProfileInfo.scss';
import { updateAvatar, updateInfoUser } from 'app/API/api';
import Loading from 'app/components/Common/Loading/Loading';

const ProfileInfo = (props: any) => {
  const { setShowProfile, data_user_local, setDataUser } = props;
  const [edit, setEdit] = useState(false);
  const [avatar, setAvatar] = useState(data_user_local.avatar);
  const [username, setUserName] = useState(data_user_local?.fullname);
  const [previewImage, setPreviewImage] = useState('');
  const [loading, setLoading] = useState(false);
  const data = {
    fullname: username,
  };

  const updateAvatarUser = async (data: any) => {
    const formData = new FormData();
    formData.append('avatar', data);
    try {
      const userResponse: any = await updateAvatar(formData);
      setDataUser({ ...data_user_local, avatar: userResponse.data.avatar });
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };
  const handleSaveEdit = () => {
    setEdit(false);
    try {
      setLoading(true);
      updateInfoUser(data);
      updateAvatarUser(avatar);
      setDataUser({ ...data_user_local, fullname: data.fullname });
    } catch (error) {
      console.log(error);
    } finally {
      // Kết thúc hiển thị trạng thái loading, dù là thành công hay thất bại
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  const handleUpdateAvatar = (e: any) => {
    if (e?.target?.files[0] && e.target && e.target.files) {
      setAvatar(e?.target?.files[0]);
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      setPreviewImage(objectUrl);
    } else {
      setPreviewImage('');
    }
  };
  const handleCancel = () => {
    setPreviewImage('');
    setEdit(false);
  };
  return (
    <div className="ProfileInfo">
      <div className="title">Infomation User</div>
      {edit ? (
        <div className="content-popup-inf">
          <div className="profile">
            <div className="image-user">
              <img alt="" src={previewImage ? previewImage : data_user_local?.avatar}></img>
              <div className="icon-change-avatar">
                <input
                  id="change-avt"
                  className="change-avatar"
                  type="file"
                  onChange={(e) => handleUpdateAvatar(e)}
                />

                <label htmlFor="change-avt">
                  <svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 512 512">
                    <path
                      d="M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M124 158v-22h-24v22M335.76 285.22v-13.31a80 80 0 00-131-61.6M176 258.78v13.31a80 80 0 00130.73 61.8"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M196 272l-20-20-20 20M356 272l-20 20-20-20"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
          <div className="content">
            <div>
              <strong>Name</strong>
              <input
                autoFocus
                type="text"
                defaultValue={data_user_local?.fullname}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <strong>Number phone</strong>
              <span>{data_user_local?.username}</span>
            </div>
            <div>
              <strong>Role</strong>
              <span>{data_user_local?.role}</span>
            </div>
            <div>
              <strong>Employee ID</strong>
              <span>{data_user_local?.id_employee}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="content-popup-inf">
          <div className="profile">
            <div className="image-user">
              <img alt="" src={data_user_local?.avatar}></img>
            </div>
          </div>
          <div className="content">
            <div>
              <strong>Name</strong>
              <span>{data_user_local.fullname}</span>
            </div>
            <div>
              <strong>Number phone</strong>
              <span>{data_user_local.username}</span>
            </div>
            <div>
              <strong>Role</strong>
              <span>{data_user_local.role}</span>
            </div>
            <div>
              <strong>Employee ID</strong>
              <span>{data_user_local.id_employee}</span>
            </div>
          </div>
        </div>
      )}
      {edit ? (
        <div className="controller">
          <button className="btn-close" onClick={() => handleCancel()}>
            Cancel
          </button>
          <button className="btn-edit" onClick={() => handleSaveEdit()}>
            Save
          </button>
        </div>
      ) : (
        <div className="controller">
          <button className="btn-close" onClick={() => setShowProfile(false)}>
            Close
          </button>
          <button className="btn-edit" onClick={() => setEdit(true)}>
            Edit
          </button>
        </div>
      )}
      {loading ? <Loading /> : ''}
    </div>
  );
};

export default ProfileInfo;
