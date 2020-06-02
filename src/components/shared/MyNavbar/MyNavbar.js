import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  logoutEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    return (
      <div className="MyNavbar">
        <h1>Navbar Here</h1>
        <button className="btn btn-info" onClick={this.logoutEvent}>Logout</button>
      </div>
    );
  }
}

export default MyNavbar;
