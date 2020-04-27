import React from "react";

class ImageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BodyContent">
        {this.props.children}
        <div className="Body2">
          <img className="image" src={this.props.image}></img>
          <h3 className="subtitle">{this.props.subtitle}</h3>
          <p className="info">{this.props.info}</p>
        </div>
      </div>
    );
  }
}

export default ImageContent;
