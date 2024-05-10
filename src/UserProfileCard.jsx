// src/UserProfileCard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfileCard = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserProfile(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {userProfile && (
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img className="w-full" src={userProfile.picture.large} alt="Profile" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{`${userProfile.name.first} ${userProfile.name.last}`}</div>
            <p className="text-gray-700 text-base">{userProfile.email}</p>
            <p className="text-gray-700 text-base">{userProfile.phone}</p>
            <p className="text-gray-700 text-base">{`${userProfile.location.city}, ${userProfile.location.country}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;
