import React from "react";
import { Typography, Row, Col, Card } from "antd";
export default function Querycard({querycarddata}) {
  console.log(querycarddata);
  return (
    <div className="querycard">
      <Card size="small">
        <Row>
          <Col span={12}>
            <Typography.Title level={4}>{querycarddata.subject}</Typography.Title>
          </Col>
          <Col span={4}>
            <Typography.Title level={5}>Query ID: {querycarddata.queryid}</Typography.Title>
          </Col>
          <Col span={5} offset={3}>
            <Typography.Title level={5}>
              Created On : {querycarddata.querydate} {querycarddata.querytime}
            </Typography.Title>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Typography.Text strong>{querycarddata.querydesc}</Typography.Text>
          </Col>
          <Col span={4} offset={2}>
            <Typography.Text keyboard type={querycarddata.querystatus.keyboardtype}>
              {querycarddata.querystatus.keyboardtype}
            </Typography.Text>
          </Col>
          <Col span={4} offset={2}>
            <Typography.Text type="secondary">{querycarddata.assignee}</Typography.Text>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
