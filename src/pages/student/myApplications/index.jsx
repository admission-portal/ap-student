/**
 * TODO: need to define the proper breakpoints and its design
 * TODO: onClick behavior
 *
 * Flow: MyApplications -> ApplicationCard -> other small components.
 * Written By: Tejas Ladhani
 */
import './style.css';
import React, { useEffect, useState, useContext } from 'react';
import {
  Layout, Row, Col, Typography, Tabs, Spin,
} from 'antd';
import axios from 'axios';
import { ApplicationCard } from '../../../containers';
import { ApplicationContext } from '../../../contexts/applicationcontext';

const { TabPane } = Tabs;

const ApplicationCardData = [
  {
    title: 'BTech Application Form',
    subCard: [
      { title: 'Appication No.', subtitle: '...' },
      { title: 'Applcation Fee', subtitle: '...' },
      { title: 'Last Date', subtitle: '...' },
      { title: 'Payment Mode', subtitle: '...' },
    ],
    downloadPanelData: [],
    setpsData: [],
  },
];

export default function MyApplications() {
  const [count] = useState(0);
  const [applicationcarddetails, setapplicationcarddetails] = useState(ApplicationCardData);
  const [applicationdetails, setapplicationdetails] = useContext(ApplicationContext);
  let ApplicationCardDataV1 = [];

  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/applications',
      headers: {
        Authorization: sessionStorage.getItem('id_token')
          ? sessionStorage.getItem('id_token')
          : '',
      },
    };

    axios(config)
      .then((response) => {
        ApplicationCardDataV1 = response.data.Items;
        setapplicationcarddetails(ApplicationCardDataV1);
        // console.log(ApplicationCardDataV1);
        setapplicationdetails(ApplicationCardDataV1);
        // !check
        // ApplicationCardDataV1.map((item) => {
        //   // console.log(item["GlobalLabels"]["Payment Modes"].map(item => item.title));
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count]);

  console.log(applicationdetails);

  return (
    <div className="myApplications" style={{ marginTop: '1.5em' }}>
      <Layout style={{ minHeight: '85vh' }}>
        <Row>
          <Col span={24}>
            <div className="myApplications_TopTitle">
              <Typography.Title level={2}>My Applications</Typography.Title>
            </div>
          </Col>
          <Col span={24}>
            <div className="myApplications_SubTitle">
              <Typography.Text type="secondary">
                Track all your applications for XYZ university from here.
              </Typography.Text>
            </div>
          </Col>
          <Col span={24}>
            <Tabs defaultActiveKey="1" onChange={() => {}}>
              <TabPane
                tab={`${applicationcarddetails.length} Applcations(s) open`}
                key="1"
              >
                {applicationcarddetails.length < 2 ? (
                  <Spin />
                ) : (
                  applicationcarddetails.map((data) => (
                    <ApplicationCard
                      key={data.ApplicationID}
                      title={data.title}
                      subCardData={[
                        {
                          title: 'Application No.',
                          subtitle: data.ApplicationID,
                        },
                        { title: 'Application Fee', subtitle: data.fees },
                        { title: 'Last Date', subtitle: data.lastDate },
                        { title: 'Payment Mode', subtitle: 'online' },
                      ]}
                      downloadPanelData={data.downloadPanelData}
                      setpsData={data.setpsData}
                    />
                  ))
                )}
              </TabPane>
              <TabPane tab="0 Application(s) completed" key="2">
                Completed Applications
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}
