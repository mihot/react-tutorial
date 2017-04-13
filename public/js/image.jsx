import React from 'react';

class Image extends React.Component {
    render() {
        const imageStyle = {
            width: '400px',
            height: '400px',
        };
        return <img src={this.props.url} style={imageStyle}/>;
    };
}

export default Image;
