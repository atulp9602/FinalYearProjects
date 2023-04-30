import React from 'react';
import { PracticeData } from '../utils/Data';
import CardsContainer from './CardsContainer';

const Practice = () => {
    return (
        <CardsContainer data={PracticeData} heading="Practices" />
    )
}

export default Practice;