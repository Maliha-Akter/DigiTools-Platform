import React, { use } from 'react';
import DigitalHeader from './DigitalHeader';
import DigitalCard from './DigitalCard';

const Digital = ({ dataPromise }) => {
    const digitalData = use(dataPromise);
    console.log(digitalData)

    // For Button select and page change
    
    return (
        <div>
            <DigitalHeader digitalData={digitalData}></DigitalHeader>
        </div>
    );
};

export default Digital;
