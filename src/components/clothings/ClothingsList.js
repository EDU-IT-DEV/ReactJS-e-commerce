import React from 'react';
import { connect } from 'react-redux';
import { fetchClothings } from '../../actions';


class ClothingShow extends React.Component {

    componentDidMount(){
        this.props.fetchClothings();
    }
    
    render() {
        return (
            <div>
                <h2>Clothings List</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("hola 2 ", state)
    return {
        clothings: state.clothings
    };
};

export default connect(
    mapStateToProps,
    { fetchClothings }
)(ClothingShow);