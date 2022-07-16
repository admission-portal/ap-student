import './style.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppHeader } from '../../../components';
import backgroundImage from './build.jpg';

export default function Landing() {
  const history = useHistory();

  return (
    <div className="Landing">
      <AppHeader />
      <section className="showcase">
        <img src={backgroundImage} alt="..." />
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

          <button className="letsGo" onClick={() => history.push('/login')} type="button">LETS GO</button>

        </div>
      </section>
    </div>
  );
}
