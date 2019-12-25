
import React from "react"
import Gallery from 'react-photo-gallery';
import img1 from "../assets/images/gallery/1.jpg";
import img2 from "../assets/images/gallery/2.jpg";
import img3 from "../assets/images/gallery/3.jpg";
import img4 from "../assets/images/gallery/4.jpg";
import img5 from "../assets/images/gallery/5.jpg";
import img6 from "../assets/images/gallery/6.jpg";
import img7 from "../assets/images/gallery/7.jpg";



export default class Galeria extends React.Component {
    render() {
        return (
            <Gallery photos={PHOTO_SET} />
        );
    }
}
const PHOTO_SET = [
    {
        src: img1,
        width: 4,
        height: 3
    },
    {
        src: img2,
        width: 4,
        height: 3
    },
    {
        src: img1,
        width: 4,
        height: 3
    },
    {
        src: img2,
        width: 4,
        height: 3
    },
];
