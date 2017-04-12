import React from 'react';
import Image from './image.jsx';

const urls = [
    'https://instagram.fzag2-1.fna.fbcdn.net/t51.2885-15/e35/17881940_1779132032402163_6107306588534472704_n.jpg',
    'https://instagram.fzag2-1.fna.fbcdn.net/t51.2885-15/e35/17881479_1435608866498210_2389061363533086720_n.jpg'
];

class Gallery extends React.Component {
    render() {
        return <Image url={urls[0]}/>;
    };
}


export default Gallery;