import React from 'react';
import { Link, useParams } from 'react-router-dom';
import construction from '../../images/construction.png'
const Construction = () => {
    const { construction } = useParams()
    return (
        <div>
            <div className='text-center mt-5 pt-5'>
                <img className='w-75' src={construction} alt="" />
            </div>

        </div>
    );
};

export default Construction;