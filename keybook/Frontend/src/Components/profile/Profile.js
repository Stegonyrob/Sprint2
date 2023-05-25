import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import ProfileHobbies from './ProfileHobbies';
import ProfileStudies from './ProfileStudies';
import ProfileLanguages from './ProfileLanguages';
import ProfileTools from './ProfileTools';

function Profile(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const userId = props.match.params.userId || localStorage.getItem('userId');
      const response = await fetch(`http://localhost:3000/users/user/${userId}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [props.match.params.userId]);

  // function Profile() {
  //   const [user, setUser] = useState();

  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       const userId = localStorage.getItem('userId');
  //       const response = await fetch(`http://localhost:3000/users/user/${userId}`);
  //       const data = await response.json();
  //       setUser(data);
  //     };

  //     fetchUser();
  //   }, []);

  return (
    <div id="cuenta">
      <div className="container-fluid main-structure">
        <div className="row">
          <div className="col-sm-5 col-md-4 col-lg-3">
            {user && <ProfileStudies userId={user.id} />}
            {user && <ProfileTools userId={user.id} />}
          </div>
          <div className="col-sm-7 col-md-7 col-lg-6">
            {user && <ProfileCard userId={user.id} />}
          </div>
          <div className="col-sm-5 col-md-4 col-lg-3">
            {user && <ProfileHobbies userId={user.id} />}
            {user && <ProfileLanguages userId={user.id} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
