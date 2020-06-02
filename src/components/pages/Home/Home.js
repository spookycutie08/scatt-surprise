import React from 'react';

import { link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const scatId = 'scat123';
    this.props.history.push(`/edit/${scatId}`);
  };

  render() {
    return (
      <div className="Home">
      <h1>Home Component</h1>
      <button className="btn btn-primary" onClick={this.editEvent}>Edit a thing</button>
      <link to="/scats/6789">View Single</link>
      <link to="/new">Add New</link>
      </div>
    );
  }
}

export default Home;
