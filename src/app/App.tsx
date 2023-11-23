import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { getLanguage, saveLanguage } from './helpers/localStorage';
import RenderRoutes, { routes } from './routes/routes';
import './styles/variables.scss';
import './styles/animation.scss';
import './styles/base.scss';
import './styles/elements.scss';
import './styles/typography.scss';
import './styles/dependencies/index.scss';
import './styles/app.scss';
import { RootState } from 'types/RootState';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Set locate to moment lib
const language = getLanguage();
saveLanguage(language);
moment.locale(language);

export function App() {
  const dispatch = useDispatch();
  // const { authenticated, currentUser, userRegister } = useSelector(
  //   (state: RootState) => state.auth,
  // );

  // const isAuthenticated = !!(authenticated && currentUser && Object.keys(currentUser).length);
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     // dispatch(loadCommonData());
  //   }
  // }, [authenticated, currentUser, isAuthenticated, dispatch]);

  return (
    <Router basename="">
      <RenderRoutes routes={routes} isAuthenticated={true} />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}
