import React from 'react';
import { connect } from 'react-redux';
import { fetchClothing } from '../../actions';

class ClothingShow extends React.Component {
  
  
  render() {
    if (!this.props) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Just testing the first render</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchClothing }
)(ClothingShow);
