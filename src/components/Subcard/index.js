/**
 * SUBCARD:
 * tiny Cards , that will be embedded in the containers for example ApplicationCard
 * 
 *  Written By : Tejas ladhani
 */
import { Typography } from 'antd';
import './style.css';

export default function Subcard() {
    return (
        <div className="Subcard">
            <div>
                <Typography.Text type='secondary'>Application No.</Typography.Text>
            </div>
            <div>
                <Typography.Text>BTECH-234/WER</Typography.Text>
            </div>
        </div>
    )
}
