import Logo from 'app/components/Layout/Logo/Logo';
import React from 'react';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import 'react-international-phone/style.css';
import './Login.scss';
import { Epath } from 'app/routes/routesConfig';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { fetchAPILogin } from 'utils/@reduxjs/logInSlice';

const LoginPage: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // const status = useSelector(getAccountStatus);
  const dispatch = useDispatch();
  const history = useHistory();
  let data = {
    username: phone,
    password: password,
  };

  const onLoginSuccess = () => {
    toast.success('Success');
    history.push(Epath.homePageFirst);
  };
  const onLoginFailed = () => {
    toast.error('Invalid Input');
  };
  const handleSubmit = async () => {
    dispatch(fetchAPILogin({ payload: data, onLoginFailed, onLoginSuccess }));
  };
  return (
    <div className="container-log-in">
      <div style={{ width: '100%', padding: '20px' }}>
        <Logo />
      </div>
      <div className="title-log-in">
        <span>Log into your account</span>
        <span>Welcome to EINFARHT, enter your details below to continue ordering.</span>
      </div>
      <div className="phone-number">
        <h3>Enter your phone:</h3>
        <div className="input-phone-number">
          <PhoneInput
            inputStyle={{
              background: '#f1f1f4',
              fontSize: '16px',
            }}
            placeholder="Enter your phone"
            defaultCountry="vn"
            value={phone}
            autoFocus
            onChange={(e) => setPhone(e.trim())}
          />
        </div>
      </div>
      <div>
        <h3>Enter password:</h3>
        <div className="input-password">
          <input
            placeholder="Enter your password"
            value={password}
            type={showPassword ? 'text' : 'password'}
            id="pwd"
            name="pwd"
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.keyCode === 13) {
                handleSubmit();
              }
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <span className="eyes" onClick={() => handleShowPassword()}>
              <AiFillEye />
            </span>
          ) : (
            <span className="eyes" onClick={() => handleShowPassword()}>
              <AiFillEyeInvisible />
            </span>
          )}
        </div>
      </div>
      <div className="log-in">
        <button onClick={handleSubmit} className="submit-log-in">
          <span>Log In</span>
        </button>
      </div>
      <div className="line">OR</div>
      <button className="item-log-in">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M29.0738 13.3887H27.9998V13.3333H15.9998V18.6667H23.5352C22.4358 21.7713 19.4818 24 15.9998 24C11.5818 24 7.99984 20.418 7.99984 16C7.99984 11.582 11.5818 7.99999 15.9998 7.99999C18.0392 7.99999 19.8945 8.76932 21.3072 10.026L25.0785 6.25466C22.6972 4.03532 19.5118 2.66666 15.9998 2.66666C8.6365 2.66666 2.6665 8.63666 2.6665 16C2.6665 23.3633 8.6365 29.3333 15.9998 29.3333C23.3632 29.3333 29.3332 23.3633 29.3332 16C29.3332 15.106 29.2412 14.2333 29.0738 13.3887Z"
              fill="#FFC107"
            />
            <path
              d="M4.2041 9.79399L8.58477 13.0067C9.7701 10.072 12.6408 7.99999 16.0001 7.99999C18.0394 7.99999 19.8948 8.76932 21.3074 10.026L25.0788 6.25466C22.6974 4.03532 19.5121 2.66666 16.0001 2.66666C10.8788 2.66666 6.43744 5.55799 4.2041 9.79399Z"
              fill="#FF3D00"
            />
            <path
              d="M15.9999 29.3333C19.4439 29.3333 22.5732 28.0153 24.9392 25.872L20.8125 22.38C19.4289 23.4323 17.7382 24.0014 15.9999 24C12.5319 24 9.58722 21.7887 8.47788 18.7027L4.12988 22.0527C6.33655 26.3707 10.8179 29.3333 15.9999 29.3333Z"
              fill="#4CAF50"
            />
            <path
              d="M29.074 13.3887H28V13.3333H16V18.6667H23.5353C23.0095 20.1443 22.0622 21.4355 20.8107 22.3807L20.8127 22.3793L24.9393 25.8713C24.6473 26.1367 29.3333 22.6667 29.3333 16C29.3333 15.106 29.2413 14.2333 29.074 13.3887Z"
              fill="#1976D2"
            />
          </svg>
          <span>Continue with Google</span>
        </button>
      </button>
      <button className="item-log-in">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M22.7332 27.04C21.4266 28.3067 19.9999 28.1067 18.6266 27.5067C17.1732 26.8933 15.8399 26.8667 14.3066 27.5067C12.3866 28.3333 11.3732 28.0933 10.2266 27.04C3.71989 20.3333 4.67989 10.12 12.0666 9.74667C13.8666 9.84 15.1199 10.7333 16.1732 10.8133C17.7466 10.4933 19.2532 9.57333 20.9332 9.69333C22.9466 9.85333 24.4666 10.6533 25.4666 12.0933C21.3066 14.5867 22.2932 20.0667 26.1066 21.6C25.3466 23.6 24.3599 25.5867 22.7199 27.0533L22.7332 27.04ZM16.0399 9.66667C15.8399 6.69333 18.2532 4.24 21.0266 4C21.4132 7.44 17.9066 10 16.0399 9.66667Z"
              fill="black"
            />
          </svg>
          <span>Continue with Apple</span>
        </button>
      </button>
      <div className="item-sign-up">
        <span>Don’t have an account?</span>
        <Link to="/register"> SIGN UP</Link>
      </div>
    </div>
  );
};
export default LoginPage;
