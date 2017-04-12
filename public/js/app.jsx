import React from 'react';
import ReactDOM from 'react-dom';

const url1 = 'https://instagram.fzag2-1.fna.fbcdn.net/t51.2885-15/e35/17881940_1779132032402163_6107306588534472704_n.jpg';
const url2 = 'https://instagram.fzag2-1.fna.fbcdn.net/t51.2885-15/e35/17881479_1435608866498210_2389061363533086720_n.jpg';

// function Image(props) {
//     return <img src={props.url}/>;
// }

class Image extends React.Component {
    render() {
        return <img src={this.props.url}/>;
    };
}


ReactDOM.render(
    <Image url={url1}/>,
    document.getElementById('root')
);