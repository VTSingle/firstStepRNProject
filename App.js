import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import {createStore} from 'redux'

import Splash from './app/containers/splash/splash';
import SingInPage from './app/containers/singInPage/singInPage';

import coreReducer from './app/reducers/coreReducer/coreReducer';

const store = createStore(coreReducer);

const App = () => (
    <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="SplashScreen" component={Splash} title="FirstScreen" initial/>
            <Scene key="SingInPageScreen" component={SingInPage} title="SecondScreen"/>
          </Stack>
        </Router>
    </Provider>
);

export default App;