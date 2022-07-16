import React, { useContext, useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import { FormWithStep } from '../../../containers';
import './style.css';
import { ApplicationContext } from '../../../contexts/applicationcontext';

export default function Application() {
  const history = useHistory();
  const [applicationdetails] = useContext(ApplicationContext);
  const [finaldata, setfinaldata] = useState();
  const id = history.location.pathname.split('/')[3];

  useEffect(() => {
    //! check this logic
    // eslint-disable-next-line array-callback-return
    applicationdetails.map((item) => {
      if (item.ApplicationID === id && item.ApplicationID !== undefined) { setfinaldata(item); }
    });
    console.log(finaldata);
  }, []);

  return (
    <div className="Application">
      <Layout style={{ padding: '2em' }}>
        <Typography.Title level={3}>Application</Typography.Title>
        {finaldata !== undefined && <FormWithStep application={finaldata} />}
      </Layout>
    </div>
  );
}
