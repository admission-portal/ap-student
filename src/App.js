import './App.css';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import Main from './main';
import Intermediate from './intermediate';
import {Landing} from './pages/common/';
function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/s' component={Main} exact/>
        <Route path='/' component={Landing} exact/>
        <Route path='/interm' component={Intermediate} exact/> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
