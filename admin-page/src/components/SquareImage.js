import React, { useState } from 'react';
import '../components/css/Card.css'
import { Modal, Image, Text } from "@nextui-org/react";

const SquareImage = ({ 
    title,
    imageUrl,
    description,
    amount,
    total_amount,
    usage_freq,
    serialNo,
    room,
    source
    }) => {
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
            <Modal noPadding open={visible} blur onClose={closeHandler}>
                <Modal.Body>
                    <Image
                        showSkeleton
                        src={imageUrl}
                        width={400}
                        height={300}
                        objectFit="cover"
                    />
                    <Text b size="$xl" style={{marginLeft:"10px",marginBottom:"1px"}}>{title}</Text>
                    <Text b style={{marginLeft:"10px",marginBottom:"1px"}}>Amount</Text>
                    <Text style={{marginLeft:"10px",marginBottom:"1px"}}>{amount} of {total_amount}</Text>
                    <Text b style={{marginLeft:"10px",marginBottom:"1px"}}>Used Frequency</Text>
                    <Text style={{marginLeft:"10px",marginBottom:"1px"}}>{usage_freq}</Text>
                    <Text b style={{marginLeft:"10px",marginBottom:"1px"}}>Serial</Text>
                    <Text style={{marginLeft:"10px",marginBottom:"1px"}}>{serialNo}</Text>
                    <Text b style={{marginLeft:"10px",marginBottom:"1px"}}>Room</Text>
                    <Text style={{marginLeft:"10px",marginBottom:"1px"}}>{room}</Text>
                    <Text b style={{marginLeft:"10px",marginBottom:"1px"}}>Source</Text>
                    <Text style={{marginLeft:"10px",marginBottom:"1px"}}>{source}</Text>
                </Modal.Body>
            </Modal>
        </>

    );
};

export default SquareImage;