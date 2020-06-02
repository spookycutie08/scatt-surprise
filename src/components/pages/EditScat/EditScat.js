import React from 'react';

import './EditScat.scss';

class EditScat extends React.Component {
  render() {
    const editId = this.props.match.params.scatId;
    return (
      <div className="EditScat">
      <h1>EditScat Component</h1>
      <h2>Scat Id is... {editId}</h2>
      </div>
    );
  }
}

export default EditScat;
