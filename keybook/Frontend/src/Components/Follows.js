import React, { useState, useEffect } from 'react';

function ProfileFollows() {
    const [follows, setFollow] = useState(null);

    useEffect(() => {
        const fetchFollow = async () => {
            try {
                const userId = 1;
                const response = await fetch(`http://localhost:3000/follow/following/${userId}`);
                const data = await response.json();
                setFollow(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFollow();
    }, []);

    return (
        <div className="default-card">
            <h2>Seguidores</h2>
            {follows && (
                <div>
                    <p>{follows.user_friend1_id}</p>
                    <p>{follows.user_friend2_id}</p>
                </div>
            )}
        </div>
    );
}

export default ProfileFollows;