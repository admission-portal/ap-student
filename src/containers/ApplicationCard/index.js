import { Typography } from 'antd';
import { Subcard, ApplicationDownloadPanel, ApplicationSteps } from '../../components';
import './style.css';
export default function ApplicationCard() {
    return (
        <div className="ApplicationCard">
            <div className="ApplicationCard_inner">
                <div className="ApplicationCard_Title">
                    <Typography.Title level={4}>BTech Application Form</Typography.Title>
                </div>
                <div className="ApplicationCard_Details_SubCards_Container">
                    <Subcard />
                    <Subcard />
                    <Subcard />
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
    )
}
