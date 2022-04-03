import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { detailsId } = useParams()
    console.log(detailsId);
    const [detail, setDetails] = useState({})
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/EmtiazHossainE2/laptop-warehouse/main/public/products.json?token=GHSAT0AAAAAABSEMEUPPJRPENPJ2K3XZTOMYSJM55A')
            .then(res => res.json())
            .then(data => {
                const pd = data.find(d => d.id == detailsId)
                setDetails(pd);
            })
    }, [detailsId])

    return (
        <div>
            <div className="row container my-5">
                <div className="col-md-6">
                    <img className='w-100  m-auto  rounded p-1' src={detail.img} alt="" />
                </div>
                <div className="col-lg-6  d-flex  justify-content-center  ">
                    <div className='mt-3'>
                        <h2 >Name : {detail.name} </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;