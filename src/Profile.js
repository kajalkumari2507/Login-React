import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          setUserDetails(data.users[0]);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [user]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-card">
      <h2>Welcome {userDetails.firstName}!</h2>
      <p>Email: {userDetails.email}</p>
      <p>Age: {userDetails.age}</p>
      <p>Gender: {userDetails.gender}</p>
      {/* Display other user information as needed */}
    </div>
  );
};

export default Profile;