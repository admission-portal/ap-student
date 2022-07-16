import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { Layout } from 'antd';
import {
  ProfileOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
  CalendarOutlined,
  QuestionOutlined,
} from '@ant-design/icons';
import ProtectedRoute from './Routes/ProtectedRoute';
import {
  Landing, Login, Profile, Signup,
} from './pages/common';
import { UserContextProvider } from './contexts/user';
import { ApplicationContextProvider } from './contexts/applicationcontext';
import {
  AppHeader, AppSider, AppFooter,
} from './components';
import {
  SDashBoard,
  Documents,
  Calendar,
  MyApplications,
  MyQueries,
  Application,
  Notices,
} from './pages/student';

const { Content } = Layout;

const studentSiderData = [
  { title: 'Dashboard', linkTo: '/s/', icon: <PieChartOutlined /> },
  {
    title: 'My Applications',
    linkTo: '/s/myapplications',
    icon: <ProfileOutlined />,
  },
  { title: 'Documents', linkTo: '/s/docs', icon: <FileOutlined /> },
  { title: 'Calendar', linkTo: '/s/calendar', icon: <CalendarOutlined /> },
  { title: 'My Queries', linkTo: '/s/myqueries', icon: <QuestionOutlined /> },
  { title: 'Profile', linkTo: '/s/Profile', icon: <UserOutlined /> },
  { title: 'Notices', linkTo: '/s/Notices', icon: <QuestionOutlined /> },
];

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <ApplicationContextProvider>
          <Switch>
            <Route path="/ap-student" component={Landing} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={Signup} exact />
            {/* <Redirect to="/ap-student" /> */}

            <Layout style={{ minHeight: '100vh' }}>
              <AppHeader />

              <Layout className="site-layout">
                <AppSider data={studentSiderData} haveSubMenu isCollapsible />
                <Layout style={{ minHeight: '100vh' }}>
                  <Content style={{ margin: '0 16px' }}>
                    <Switch>
                      <ProtectedRoute
                        path="/s/myapplications"
                        component={MyApplications}
                        exact
                      />
                      <ProtectedRoute
                        path="/s/docs"
                        component={Documents}
                        exact
                      />
                      <ProtectedRoute
                        path="/s/calendar"
                        component={Calendar}
                        exact
                      />
                      <ProtectedRoute
                        path="/s/myqueries"
                        component={MyQueries}
                        exact
                      />
                      <ProtectedRoute
                        path="/s/Profile"
                        component={Profile}
                        exact
                      />
                      <ProtectedRoute
                        path="/s/Notices"
                        component={Notices}
                        exact
                      />
                      <ProtectedRoute
                        path="/s/myapplications/:ApplicationId"
                        component={Application}
                      />
                      <ProtectedRoute path="/s" component={SDashBoard} exact />
                    </Switch>
                  </Content>
                  <AppFooter />
                </Layout>
              </Layout>
            </Layout>
          </Switch>
        </ApplicationContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
