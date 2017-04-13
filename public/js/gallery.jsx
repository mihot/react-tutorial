import React from 'react';
import Image from './image.jsx';

import Data from './services/data.jsx';

class Gallery extends React.Component {

    constructor(props) {
        super(props)
        this.state = {urls: []};
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

    render() {
        console.log('render');
        return (
            <div>
                {this.state.urls.map((url, index) =>
                    <Image url={url} key={index}/>
                )}
            </div>
        )
    };
}


export default Gallery;
