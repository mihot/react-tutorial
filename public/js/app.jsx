import React from 'react';
import ReactDOM from 'react-dom';

const image1 = 'https://instagram.fzag2-1.fna.fbcdn.net/t51.2885-15/e35/17881940_1779132032402163_6107306588534472704_n.jpg';
const image2 = 'https://instagram.fzag2-1.fna.fbcdn.net/t51.2885-15/e35/17881479_1435608866498210_2389061363533086720_n.jpg';
const element = <img src={image1} />;


ReactDOM.render(
    element,
    document.getElementById('root')
);