/**
 * This component is nothting but the Navbar (Appbar) which will be on the Top section.
 * Being Utilised by the main.js (outermost layout)
 * 
 * Written By : tejas Ladhani
 */
import React from 'react'
import {
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';
import './style.css';

function AppHeader() {
  const { Header } = Layout;

  return (
    <Header className="site-layout-background Header" >
       <div className="logout">
        <span> 👨‍🎓 ad</span>
        <span>MISSION</span>
      </div>
    </Header>
  )
}

export default AppHeader;
