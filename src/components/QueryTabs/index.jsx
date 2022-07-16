/* eslint-disable react/prop-types */
import React from 'react';
import {
  Tabs, Row, Col, Card, Typography,
} from 'antd';

const { TabPane } = Tabs;

// !check
export default function QueryTabs({ data }) {
  return (
    <div>
      <Tabs>
        <TabPane tab={data.key} key="1">
          <Row>
            <Col span={24}>
              <div className="">
                <Card>
                  <Row>
                    <Col span={24}>
                      <div className="">
                        <Typography.Title level={4}>
                          Query 2
                        </Typography.Title>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
}
