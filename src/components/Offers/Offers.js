import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';

const Offers = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('offers.json')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div className='container my-3 '>
            <h2 className='text-center pb-4'>Hurry! This sale ends in: 10 days</h2>
            <div className="row">
                {
                    offers.map(offer => <Offer key={offer.id} offer={offer}></Offer>)
                }
            </div>
        </div>
    );
};

export default Offers;