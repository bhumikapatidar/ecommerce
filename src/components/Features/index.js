import React from 'react';
import {FeatureContainer, FeatureButton} from './FeatureElements';

const Feature = () => {
    return (
        <div>
            <FeatureContainer>
                <h1>Pizza of the Day</h1>
                <p>Truffle alfredo suace topped with 24 carat gold nut.</p>
                <FeatureButton>Order Now</FeatureButton>
            </FeatureContainer>
        </div>
    );
};

export default Feature;