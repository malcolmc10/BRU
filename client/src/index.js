import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';



const Root = () => (

  <Router>
    <Switch>
      <Route component={App} path="/" />
      <Route component={Signin} path="/signin" />
      <Route component={Signup} path="/signup" />
      <Route component={Checkout} path="/checkout" />
    </Switch>
</Router>

)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
