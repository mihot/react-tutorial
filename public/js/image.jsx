import React from 'react';

class Image extends React.Component {
    render() {
        const imageStyle = {
            width: '400px',
            height: '400px',
        };
        return <img src={this.props.url}
                    onClick={this.props.onClickHandler}
                    style={imageStyle}/>;
    };
}

export default Image;
