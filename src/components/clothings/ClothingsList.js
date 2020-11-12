import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchClothings } from '../../actions';


class ClothingShow extends React.Component {

    componentDidMount(){
        this.props.fetchClothings();
    }

    renderList() {
        console.log(this.props.clothings);
            return this.props.clothings.map(clothing => {
                return (
                    <div className="item" key={clothing.id}>
                        <i className="large middle aligned icon camera" />
                        <div className="content">
                            <Link to={`/clothings/${clothing.id}`} className="header">
                                id: {clothing.id}
                            </Link>
                            <div>
                                <img src={clothing.urls.thumb} />
                            </div>
                        </div>
                    </div>
                );
            });
    
    }
    
    render() {
        
        return (
            <div>
                <h2>Clothings List</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clothings: Object.values(state.clothings)
    };
};

export default connect(
    mapStateToProps,
    { fetchClothings }
)(ClothingShow);