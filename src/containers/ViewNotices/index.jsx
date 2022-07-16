/* eslint-disable eqeqeq */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  Skeleton, Card, Row, Col, Spin,
} from 'antd';
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import './style.css';

const { Meta } = Card;

export default function ViewNotices() {
  const [Notices, setNotices] = useState();
  // const [IsLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/notices',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('id_token')}`,
      },
    };

    axios(config)
      .then((response) => {
        const result = JSON.parse(response.data);
        if (result.ResponseMetadata.HTTPStatusCode == 200) { setNotices(result.Items); } else { console.log('Error!'); }
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="ViewNotices">
      {/* <PageHeader title="View Notices" /> */}
      <Row sm={24} md={12} lg={6} xl={6} gutter={24}>
        {Notices == undefined ? <Spin /> : Notices.map((item, index) => (
          <Col key={index}>
            <Card
              style={{ width: 300, marginTop: 16 }}
              actions={[
                <EditOutlined key="edit" />,
                <DeleteOutlined key="delete" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
                                // hoverable
              extra={item.NoticeID}
            >
              <Skeleton loading={false} avatar active>
                <Meta
                  title={item.title}
                  description={<span>{item.description}</span>}
                />
              </Skeleton>
            </Card>
          </Col>
        ))}

      </Row>
    </div>
  );
}
