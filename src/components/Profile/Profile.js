import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../Firebase/Firebase.init';

const Profile = () => {
    const [getUser, setGetUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setGetUser(user)
            } else {
                setGetUser({})
            }
        });
    }, [])
    return (
        <div className='text-center my-5'>
            <h2>Welcome {getUser?.displayName} to your profile</h2>
            <img className='w-25 rounded-circle mt-5 p-0' src={getUser?.photoURL} alt="" srcset="" />

        </div>
    );
};

export default Profile;