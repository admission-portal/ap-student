/**
 * TODO: Dynamicness neet to be imposed.
 * TODO: need to define the proper breakpoints and its design
 * TODO: onClick behaviour 
 * Written By: Tejas Ladhani
 */
import './style.css';
import { Layout, Row, Col, Typography, Tabs } from 'antd';
import { ApplicationCard } from '../../../containers';

const { TabPane } = Tabs;
export default function MyApplications() {
    return (
        <div className="myApplications" style={{ marginTop: '1.5em' }}>
            <Layout style={{ minHeight: '85vh' }}>
                <Row>
                    <Col span={24}>
                        <div className="myApplications_TopTitle">
                            <Typography.Title level={2}>
                                My Applications
                            </Typography.Title>
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
                        <Tabs defaultActiveKey="1" onChange={() => { }}>
                            <TabPane tab="3 Application(s) in progress" key="1">
                                {
                                    [1, 2, 3].map(() => <ApplicationCard />)
                                }

                            </TabPane>
                            <TabPane tab="2 Application(s) completed" key="2">
                                Completed Applications
                            </TabPane>

                        </Tabs>
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}
