import React from 'react';

class AddImage extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.newImage} onChange={this.props.onNewImageHandler}/>
                <button type="button" onClick={this.props.addImage}>Dodaj Lidiju</button>
            </div>
        );
    };
}

export default AddImage;
