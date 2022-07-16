import React, { useContext, useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import { FormWithStep } from '../../../containers';
import './style.css';
import { ApplicationContext } from '../../../contexts/applicationContext';

export default function Application() {
  const history = useHistory();
  const [applicationDetails] = useContext(ApplicationContext);
  const [finalData, setFinalData] = useState();
  const id = history.location.pathname.split('/')[3];

  useEffect(() => {
    //! check this logic
    // eslint-disable-next-line array-callback-return
    applicationDetails.map((item) => {
      if (item.ApplicationID === id && item.ApplicationID !== undefined) {
        setFinalData(item);
      }
    });
  }, []);

  return (
    <div className="Application">
      <Layout style={{ padding: '2em' }}>
        <Typography.Title level={3}>Application</Typography.Title>
        {finalData !== undefined && <FormWithStep application={finalData} />}
      </Layout>
    </div>
  );
}
