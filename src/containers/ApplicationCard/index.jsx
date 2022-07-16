/* eslint-disable react/prop-types */

import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import {
  SubCard,
  ApplicationDownloadPanel,
  ApplicationSteps,
} from '../../components';
import './style.css';

export default function ApplicationCard({ title, subCardData }) {
  return (
    <div className="ApplicationCard">
      <div className="ApplicationCard_inner">
        <div className="ApplicationCard_Title">
          <Link to={`/s/myapplications/${subCardData[0].subtitle}`}>
            <Typography.Title level={4}>{title}</Typography.Title>
          </Link>
        </div>
        <div className="ApplicationCard_Details_SubCards_Container">
          {subCardData.map((data) => (
            <SubCard data={data} />
          ))}
        </div>

        <div className="ApplicationCard_Details_DownloadPanel">
          <ApplicationDownloadPanel />
        </div>

        <div className="ApplicationCard_stepsContainer">
          {/* <hr/> */}
          <ApplicationSteps />
        </div>
      </div>
    </div>
  );
}
