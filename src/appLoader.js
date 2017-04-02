import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {browserHistory, Router} from 'react-router';
import {AppContainer as HotReloader} from 'react-hot-loader';
import thunk from 'redux-thunk';
import moment from 'moment';
import createLogger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// import firebase from 'firebase/app';

// import rootSaga from './sagas';
import {rootReducer} from './reducers';
import {routes} from './routes';


// const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

//---Startup code
moment.locale('en');
const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      // sagaMiddleware,
      thunk,
      logger
    )
  )
);

// sagaMiddleware.run(rootSaga);
//--------------

//---App initialization
const content = (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);
const renderRoot = () => ReactDOM.render(
    <HotReloader>{content}</HotReloader>,
    document.getElementById('root')
);
renderRoot();

//---Hot Module Replacement
if (module.hot) module.hot.accept('./routes', renderRoot);
