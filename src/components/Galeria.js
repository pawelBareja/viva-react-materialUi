import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import img1 from "../assets/images/gallery/1.jpg"
import img2 from "../assets/images/gallery/2.jpg"
import img3 from "../assets/images/gallery/3.jpg"
import img4 from "../assets/images/gallery/4.jpg"
import img5 from "../assets/images/gallery/5.jpg"
import img6 from "../assets/images/gallery/6.jpg"
import img7 from "../assets/images/gallery/7.jpg"
import img8 from "../assets/images/gallery/8.jpg"
import img9 from "../assets/images/gallery/9.jpg"


const photos = [
    {
        src: img1,
        width: 4,
        height: 3
    },
    {
        src: img2,
        width: 2,
        height: 1
    },
    {
        src: img3,
        width: 4,
        height: 3
    },
    {
        src: img4,
        width: 4,
        height: 3
    },
    {
        src: img5,
        width: 4,
        height: 3
    },
    {
        src: img6,
        width: 4,
        height: 3
    },
    {
        src: img7,
        width: 4,
        height: 3
    },
    {
        src: img8,
        width: 2,
        height: 1
    },
    {
        src: img9,
        width: 4,
        height: 3
    }
];


const galleryStyle = {
    margin: "50px 0",
}

function Galeria() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div style={galleryStyle}>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export default Galeria;
