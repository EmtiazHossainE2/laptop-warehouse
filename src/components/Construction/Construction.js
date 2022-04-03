import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UnderConstruction from '../../images/construction.png'
const Construction = () => {
    const { construction } = useParams()
    return (
        <div>
            <div className='text-center'>
                <img className='w-75' src={UnderConstruction} alt="" />
            </div>

        </div>
    );
};

export default Construction;