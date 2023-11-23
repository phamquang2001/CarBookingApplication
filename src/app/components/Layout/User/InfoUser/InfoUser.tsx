import React, { useEffect, useState } from 'react';
import './InfoUser.scss';
import {
  removeToken,
  removeRefreshToken,
  getUserFromLocalStorage,
  removeUser,
  saveUser,
} from 'app/helpers/localStorage';
import { useHistory } from 'react-router-dom';
import { Epath } from 'app/routes/routesConfig';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { getAPIUser } from 'app/API/api';

const InfoUser: React.FC = () => {
  const [showProfile, setShowProfile] = useState(false);
  const history = useHistory();
  const data_user_local: any = getUserFromLocalStorage();
  const [dataUser, setDataUser] = useState(data_user_local);
  const handleLogout = () => {
    history.push(Epath.loginPage);
    removeToken();
    removeRefreshToken();
    removeUser();
  };
  useEffect(() => {
    fetch_data();
  }, [dataUser.fullname, dataUser.avatar]);
  const fetch_data = async () => {
    try {
      const userResponse: any = await getAPIUser(data_user_local.id_user);
      setDataUser(userResponse.data);
      saveUser(userResponse.data);
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };
  console.log(data_user_local);
  return (
    <div className="InfoUser">
      {/* <div className="title">Your Profile</div> */}
      <div className="container-info-user">
        <div className="profile">
          <div className="image-user">
            <img alt="" src={data_user_local?.avatar}></img>
          </div>
          <span className="name-user ">{data_user_local?.fullname}</span>
          <span className="phone-number-user">{data_user_local?.username}</span>
        </div>
        <h2 className="setting">Account Settings</h2>
        <div className="account-setting">
          {/* //Profile */}
          <div onClick={() => setShowProfile(true)} className="item-setting">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M6 27C6 25.4087 6.63214 23.8826 7.75736 22.7574C8.88258 21.6321 10.4087 21 12 21H24C25.5913 21 27.1174 21.6321 28.2426 22.7574C29.3679 23.8826 30 25.4087 30 27C30 27.7956 29.6839 28.5587 29.1213 29.1213C28.5587 29.6839 27.7956 30 27 30H9C8.20435 30 7.44129 29.6839 6.87868 29.1213C6.31607 28.5587 6 27.7956 6 27Z"
                stroke="black"
                stroke-opacity="0.6"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z"
                stroke="black"
                stroke-opacity="0.6"
                stroke-width="2"
              />
            </svg>
            <div className="content-setting">
              <h2>Profile information</h2>
              <p>Change your account information</p>
            </div>
            <button className="forward-setting">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M3.32312 16.8781L17.7521 10.1791C18.7501 9.71605 18.7501 8.28205 17.7521 7.81905L3.32312 1.12205C2.28812 0.642051 1.19312 1.66005 1.58012 2.74305L3.81312 8.99705L1.58012 15.2581C1.19312 16.3401 2.28812 17.3581 3.32312 16.8781V16.8781Z"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M3.81006 9H18.5001"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            onClick={() => {
              history.push(Epath.homePageThird);
            }}
            className="item-setting"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M19.6667 12.6666H17.6667V19.3333L23.3733 22.7199L24.3333 21.1066L19.6667 18.3333V12.6666ZM19 6C15.8174 6 12.7652 7.26428 10.5147 9.5147C8.26428 11.7651 7 14.8174 7 18H3L8.28 23.3733L13.6667 18H9.66667C9.66667 15.5246 10.65 13.1506 12.4003 11.4003C14.1507 9.64998 16.5246 8.66666 19 8.66666C21.4754 8.66666 23.8493 9.64998 25.5997 11.4003C27.35 13.1506 28.3333 15.5246 28.3333 18C28.3333 20.4753 27.35 22.8493 25.5997 24.5996C23.8493 26.3499 21.4754 27.3333 19 27.3333C16.4267 27.3333 14.0933 26.2799 12.4133 24.5866L10.52 26.4799C11.6286 27.6007 12.9496 28.4893 14.4056 29.0937C15.8616 29.6981 17.4235 30.0062 19 29.9999C22.1826 29.9999 25.2348 28.7356 27.4853 26.4852C29.7357 24.2348 31 21.1825 31 18C31 14.8174 29.7357 11.7651 27.4853 9.5147C25.2348 7.26428 22.1826 6 19 6Z"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
            <div className="content-setting">
              <h2>Ride history</h2>
              <p>View your trip history</p>
            </div>
            <button className="forward-setting">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M3.32312 16.8781L17.7521 10.1791C18.7501 9.71605 18.7501 8.28205 17.7521 7.81905L3.32312 1.12205C2.28812 0.642051 1.19312 1.66005 1.58012 2.74305L3.81312 8.99705L1.58012 15.2581C1.19312 16.3401 2.28812 17.3581 3.32312 16.8781V16.8781Z"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M3.81006 9H18.5001"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="item-setting">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M19.4922 18.0887L19.0934 17.1716L19.4922 18.0887C19.9636 17.8836 20.3887 17.5846 20.7444 17.211C21.1001 16.8375 21.3799 16.3967 21.5699 15.915C21.7599 15.4334 21.8571 14.9187 21.8571 14.4C21.8571 13.3545 21.462 12.3425 20.7444 11.589C20.0253 10.8339 19.0392 10.4 18 10.4C16.9608 10.4 15.9747 10.8339 15.2556 11.589C14.538 12.3425 14.1429 13.3545 14.1429 14.4C14.1429 15.4456 14.538 16.4575 15.2556 17.211C15.9747 17.9661 16.9608 18.4 18 18.4C18.5135 18.4 19.0207 18.2937 19.4922 18.0887ZM18 28.4221C17.8617 28.2482 17.7078 28.0524 17.5412 27.8369C16.8036 26.8826 15.8215 25.5474 14.8413 24.0219C13.8593 22.4937 12.8904 20.7919 12.1698 19.1029C11.4439 17.4017 11 15.7823 11 14.4C11 12.4221 11.7488 10.5344 13.0673 9.14996C14.3842 7.76717 16.1597 7 18 7C19.8403 7 21.6158 7.76717 22.9327 9.14996C24.2512 10.5344 25 12.4221 25 14.4C25 15.7823 24.5561 17.4017 23.8302 19.1029C23.1096 20.7919 22.1407 22.4937 21.1587 24.0219C20.1785 25.5474 19.1964 26.8826 18.4588 27.8369C18.2922 28.0524 18.1383 28.2482 18 28.4221Z"
                stroke="black"
                stroke-opacity="0.6"
                stroke-width="2"
              />
            </svg>
            <div className="content-setting">
              <h2>Address</h2>
              <p>Add your address</p>
            </div>
            <button className="forward-setting">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M3.32312 16.8781L17.7521 10.1791C18.7501 9.71605 18.7501 8.28205 17.7521 7.81905L3.32312 1.12205C2.28812 0.642051 1.19312 1.66005 1.58012 2.74305L3.81312 8.99705L1.58012 15.2581C1.19312 16.3401 2.28812 17.3581 3.32312 16.8781V16.8781Z"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M3.81006 9H18.5001"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="item-setting">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M25.3333 30C24.3148 30 23.4491 29.65 22.7361 28.95C22.0231 28.25 21.6667 27.4 21.6667 26.4C21.6667 26.26 21.6769 26.1148 21.6972 25.9644C21.7176 25.814 21.7481 25.6792 21.7889 25.56L13.1722 20.64C12.8259 20.94 12.4389 21.1752 12.0111 21.3456C11.5833 21.516 11.1352 21.6008 10.6667 21.6C9.64815 21.6 8.78241 21.25 8.06944 20.55C7.35648 19.85 7 19 7 18C7 17 7.35648 16.15 8.06944 15.45C8.78241 14.75 9.64815 14.4 10.6667 14.4C11.1352 14.4 11.5833 14.4852 12.0111 14.6556C12.4389 14.826 12.8259 15.0608 13.1722 15.36L21.7889 10.44C21.7481 10.32 21.7176 10.1852 21.6972 10.0356C21.6769 9.886 21.6667 9.7408 21.6667 9.6C21.6667 8.6 22.0231 7.75 22.7361 7.05C23.4491 6.35 24.3148 6 25.3333 6C26.3519 6 27.2176 6.35 27.9306 7.05C28.6435 7.75 29 8.6 29 9.6C29 10.6 28.6435 11.45 27.9306 12.15C27.2176 12.85 26.3519 13.2 25.3333 13.2C24.8648 13.2 24.4167 13.1152 23.9889 12.9456C23.5611 12.776 23.1741 12.5408 22.8278 12.24L14.2111 17.16C14.2519 17.28 14.2824 17.4152 14.3028 17.5656C14.3231 17.716 14.3333 17.8608 14.3333 18C14.3333 18.14 14.3231 18.2852 14.3028 18.4356C14.2824 18.586 14.2519 18.7208 14.2111 18.84L22.8278 23.76C23.1741 23.46 23.5611 23.2252 23.9889 23.0556C24.4167 22.886 24.8648 22.8008 25.3333 22.8C26.3519 22.8 27.2176 23.15 27.9306 23.85C28.6435 24.55 29 25.4 29 26.4C29 27.4 28.6435 28.25 27.9306 28.95C27.2176 29.65 26.3519 30 25.3333 30Z"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
            <div className="content-setting">
              <h2>Refer to friends</h2>
              <p>Share this app with your friends</p>
            </div>
            <button className="forward-setting">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M3.32312 16.8781L17.7521 10.1791C18.7501 9.71605 18.7501 8.28205 17.7521 7.81905L3.32312 1.12205C2.28812 0.642051 1.19312 1.66005 1.58012 2.74305L3.81312 8.99705L1.58012 15.2581C1.19312 16.3401 2.28812 17.3581 3.32312 16.8781V16.8781Z"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M3.81006 9H18.5001"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="item-setting">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M25.3201 16.8014C26.0234 23.2522 28.7895 25.2024 28.7895 25.2024H7C7 25.2024 10.6316 22.6425 10.6316 13.681C10.6316 11.6443 11.3966 9.69047 12.7585 8.25029C14.1215 6.8101 15.97 6 17.8947 6C18.3027 6 18.7082 6.036 19.1053 6.10801M19.9889 28.8029C19.7764 29.167 19.471 29.4692 19.1034 29.6793C18.7359 29.8894 18.319 30 17.8947 30C17.4705 30 17.0536 29.8894 16.6861 29.6793C16.3185 29.4692 16.0131 29.167 15.8005 28.8029M26.3684 13.2009C27.3316 13.2009 28.2553 12.8216 28.9363 12.1464C29.6174 11.4712 30 10.5554 30 9.60046C30 8.64556 29.6174 7.72977 28.9363 7.05455C28.2553 6.37933 27.3316 6 26.3684 6C25.4053 6 24.4816 6.37933 23.8005 7.05455C23.1195 7.72977 22.7368 8.64556 22.7368 9.60046C22.7368 10.5554 23.1195 11.4712 23.8005 12.1464C24.4816 12.8216 25.4053 13.2009 26.3684 13.2009Z"
                stroke="black"
                stroke-opacity="0.6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="content-setting">
              <h2>Notifications</h2>
              <p>Managing Notifications</p>
            </div>
            <button className="forward-setting">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M3.32312 16.8781L17.7521 10.1791C18.7501 9.71605 18.7501 8.28205 17.7521 7.81905L3.32312 1.12205C2.28812 0.642051 1.19312 1.66005 1.58012 2.74305L3.81312 8.99705L1.58012 15.2581C1.19312 16.3401 2.28812 17.3581 3.32312 16.8781V16.8781Z"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M3.81006 9H18.5001"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="item-setting">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M10.8482 12.9264C7.89624 13.5948 6.42027 13.9284 6.06868 15.0576C5.71829 16.1856 6.72387 17.3628 8.73622 19.716L9.25701 20.3244C9.82819 20.9928 10.115 21.3276 10.2434 21.7404C10.3718 22.1544 10.3286 22.6008 10.2422 23.4925L10.163 24.3049C9.85939 27.4453 9.70699 29.0149 10.6262 29.7121C11.5454 30.4105 12.9277 29.7733 15.6901 28.5013L16.4064 28.1725C17.1912 27.8101 17.5836 27.6301 18 27.6301C18.4164 27.6301 18.8088 27.8101 19.5948 28.1725L20.3087 28.5013C23.0723 29.7733 24.4546 30.4093 25.3726 29.7133C26.293 29.0149 26.1406 27.4453 25.837 24.3049M27.2638 19.716C29.2761 17.364 30.2817 16.1868 29.9313 15.0576C29.5797 13.9284 28.1038 13.5936 25.1518 12.9264L24.3886 12.7536C23.5499 12.564 23.1311 12.4692 22.7939 12.2136C22.4579 11.958 22.2419 11.5704 21.8099 10.7952L21.4163 10.0896C19.896 7.3632 19.1364 6 18 6C16.8636 6 16.104 7.3632 14.5837 10.0896"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
            <div className="content-setting">
              <h2>Rate us</h2>
              <p>Rate our app on Play Store</p>
            </div>
            <button className="forward-setting">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M3.32312 16.8781L17.7521 10.1791C18.7501 9.71605 18.7501 8.28205 17.7521 7.81905L3.32312 1.12205C2.28812 0.642051 1.19312 1.66005 1.58012 2.74305L3.81312 8.99705L1.58012 15.2581C1.19312 16.3401 2.28812 17.3581 3.32312 16.8781V16.8781Z"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M3.81006 9H18.5001"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div onClick={() => handleLogout()} className="item-setting">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M18 30C14.8174 30 11.7652 28.7357 9.51472 26.4853C7.26428 24.2348 6 21.1826 6 18C6 14.8174 7.26428 11.7652 9.51472 9.51472C11.7652 7.26428 14.8174 6 18 6"
                stroke="black"
                stroke-opacity="0.6"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M15 18H30M30 18L25.5 13.5M30 18L25.5 22.5"
                stroke="black"
                stroke-opacity="0.6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="content-setting">
              <h2>Logout</h2>
              <p>Logout of your account</p>
            </div>
            <button className="forward-setting">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M3.32312 16.8781L17.7521 10.1791C18.7501 9.71605 18.7501 8.28205 17.7521 7.81905L3.32312 1.12205C2.28812 0.642051 1.19312 1.66005 1.58012 2.74305L3.81312 8.99705L1.58012 15.2581C1.19312 16.3401 2.28812 17.3581 3.32312 16.8781V16.8781Z"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M3.81006 9H18.5001"
                    stroke="#047D30"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showProfile && (
        <ProfileInfo
          data_user_local={dataUser}
          setDataUser={setDataUser}
          setShowProfile={setShowProfile}
        />
      )}
    </div>
  );
};

export default InfoUser;
