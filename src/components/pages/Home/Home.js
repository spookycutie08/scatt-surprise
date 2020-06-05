import React from 'react';

import { Link } from 'react-router-dom';

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
      <Link to="/scats/6789">View Single</Link>
      <Link to="/new">Add New</Link>
      </div>
    );
  }
}

export default Home;
