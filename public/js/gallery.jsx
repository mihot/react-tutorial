import React from 'react';
import Image from './image.jsx';
import AddImage from './addImage.jsx';

import Data from './services/data.jsx';

class Gallery extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            urls: [],
            newImage: ''
        };
        console.log('init');
    }

    componentDidMount() {
        console.log('did mount');
        Data.getDataFromServer()
            .then(urls => {
                this.setState({
                    urls
                });
            });
    }

    componentWillUnmount() {
        console.log('will unmount');
    };

    onImageClickHandler  = (index) => {
        const urls = this.state.urls.slice();

        urls.splice(index, 1);

        this.setState({urls});
    };

    addImage = () => {
        console.log('new image', this.state.newImage);
        const urls = this.state.urls.slice();
        urls.push(this.state.newImage);
        this.setState({
            urls,
            newImage: ''
        });
    };

    onNewImageHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            newImage: event.target.value
        });
    };

    render() {
        console.log('render');
        return (
            <div>
                <AddImage newImage={this.state.newImage}
                          onNewImageHandler={this.onNewImageHandler}
                          addImage={this.addImage}/>
                {this.state.urls.map((url, index) =>
                    <Image url={url} key={index} index={index} onClickHandler={this.onImageClickHandler}/>
                )}

                {!this.state.urls.length &&
                <h2>
                    Lidija, vrati seeeeee :(
                </h2>
                }
            </div>
        )
    };
}


export default Gallery;
