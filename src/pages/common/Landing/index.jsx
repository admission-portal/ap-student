import './style.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppHeader } from '../../../components';

export default function Landing() {
  const history = useHistory();
  // let hostedUI;
  // if (!(window.location.href[(window.location.href).length - 1] === '/')) {
  //   hostedUI = `https://handlemyadmissionsforadmin.auth.us-east-1.amazoncognito.com/login?client_id=7pcvc94m5cq87qbdkpdlj40qho&response_type=token&scope=email+phone+openid+aws.cognito.signin.user.admin+profile&redirect_uri=${window.location.href}/interm`;
  // }
  return (
    <div className="Landing">
      <AppHeader />
      <section className="showcase">
        <img src="./build.jpg" alt="..." />
        <div className="overlay" />
        <div className="text">
          <h2>adMISSION Portal </h2>
          <h3>admit with ease</h3>
          <p>
            HANDLE MY ADMISSIONS is a platform that can help high school
            candidates to manage their college applications. The platform serves
            as the central hub for the applicants for their end-to-end
            application journey. It also serves as a central hub for
            institutions in order to manage the incoming applications.
          </p>

          <button onClick={() => history.push('/login')} type="button">LETS GO</button>
          {/* <a href={hostedUI}>LETS GO!</a> */}
        </div>
      </section>
    </div>
  );
}
