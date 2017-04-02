import './app.scss';

import React from 'react';
import Helmet from 'react-helmet';
import Firebase from 'firebase';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import ACTION CREATORS
import * as actionCreators from '../actions';

import Rating from './Rating/Rating';

// const fireConfig = {
//   apiKey: "AIzaSyB7cK49AiffLmJLbShP0G3dsU7TYGXhwaQ",
//   authDomain: "rate-everything-788fc.firebaseapp.com",
//   databaseURL: "https://rate-everything-788fc.firebaseio.com",
//   storageBucket: "rate-everything-788fc.appspot.com",
//   messagingSenderId: "26623631949"
// };
//
// Firebase.initializeApp(fireConfig);


export class _App extends React.Component {

  get defaultProps() {
    return {
      uid: null,
      item: {
        _id: 0,
        name: 'test',
        rating: 0,
        image: '//placehold.it/200x200'
      },
      votes: []
    }
  }

  // State "Model" Validators
  static propTypes = {
    // Props
  }

  render = () => {
    return (
      <div className="main-app">
        <Helmet
          title="Rate Everything"
          titleTemplate="%s | Rate Life Better!"
          htmlAttributes={{lang: "en", amp: undefined}}
          meta={[
            {charset: "utf-8" },
            {name: "description", content: "Awesome rating application"},
            {"http-equiv": "x-ua-compatible", content: "ie=edge"},
            {name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no"},
          ]}
          link={[{rel: "icon", href: require('../../assets/img/favicon.png'), type: 'image/png', sizes: '32x32' }]} />

        <h1 className="title--bg">Start Rating</h1>

        <Rating init={this.defaultProps}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    userId: state.uId,
    item: state.item,
    votes: state.votes
  });
};
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export const App = connect(mapStateToProps,mapDispatchToProps)(_App);
