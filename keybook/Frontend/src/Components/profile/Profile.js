import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import ProfileHobbies from './ProfileHobbies';
import ProfileDefault from './ProfileDefault';
import ProfileStudies from './ProfileStudies';
import ProfileLanguages from './ProfileLanguages';
import ProfileTools from './ProfileTools';

function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const id = 1;
      const response = await fetch(`http://localhost:3000/users/user/${id}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <ProfileCard
        name={user?.name}
        email={user?.email}
        profilePicture={user?.profile_picture}
      />
      {user && <ProfileHobbies userId={user.id} />}
      {user && <ProfileStudies userId={user.id} />}
      {user && <ProfileLanguages userId={user.id} />}
      {user && <ProfileTools userId={user.id} />}
      <div>
        <ProfileDefault />
      </div>
    </div>

  );
}


export default Profile;
