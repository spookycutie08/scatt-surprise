import React from 'react';

import './SingleScat.scss';
import scatData from '../../../helpers/data/scatData';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const { scatId } = this.props.match.params; // equal to const scatId = this.props.match.params.scatId (object destructuring)
    scatData.getSingleScat(scatId)
      .then((response) => this.setState({ scat: response.data }))
      .catch((err) => console.error('unable to get single scat:', err));
  }

  render() {
    const { scat } = this.state;
    return (
      <div className="SingleScat">
      <h1>Single Scat</h1>
        <p>color: {scat.color}</p>
        <p>size: {scat.size}</p>
        <p>shape: {scat.shape}</p>
        <p>Was it Fulfilling? {scat.wasFulfilling ? 'yes' : 'no'}</p>
      </div>
    );
  }
}

export default SingleScat;
