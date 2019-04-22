import React, { Fragment } from 'react';
import lifecycle from 'react-pure-lifecycle';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';


const componentDidMount = () => {
  store.dispatch(loadUser());
};

const methods = {
  componentDidMount
};

const App = ({ children }) => {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        {children}
      </Fragment>
    </Provider>
  )
}

export default lifecycle(methods)(App);