import React, { useState } from 'react';
import '../components/css/Card.css'
import { Modal, Image, Text } from "@nextui-org/react";

const SquareImage = ({ title, imageUrl, description }) => {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <>
            <div className="card" onClick={handler}>
                <img src={imageUrl} alt={title} />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                </div>

            </div>
            <Modal noPadding open={visible} onClose={closeHandler}>
                <Modal.Body>
                    <Image
                        showSkeleton
                        src={imageUrl}
                        width={400}
                        height={300}
                        objectFit="cover"
                    />
                    <Text b size="$xl" style={{marginLeft:"10px",marginBottom:"1px"}}>Oscilloscope</Text>
                    <Text b style={{marginLeft:"10px",marginBottom:"1px"}}>Amount</Text>
                    <Text style={{marginLeft:"10px",marginBottom:"1px"}}>20</Text>
                    <Text b style={{marginLeft:"10px",marginBottom:"1px"}}>Serial</Text>
                    <Text style={{marginLeft:"10px",marginBottom:"1px"}}>75XXXXXXXXXXXX</Text>
                    <Text style={{marginLeft:"10px",marginBottom:"1px"}}>76XXXXXXXXXXXX</Text>
                    <Text style={{marginLeft:"10px",marginBottom:"10px"}}>77XXXXXXXXXXXX</Text>
                </Modal.Body>
            </Modal>
        </>

    );
};

export default SquareImage;