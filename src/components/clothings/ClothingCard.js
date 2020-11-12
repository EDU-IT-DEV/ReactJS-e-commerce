import React from 'react';

class ImageCard extends React.Component {
  
  componentDidMount() {
    
  }

  
  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
