import React, { useState, useEffect } from 'react';

function ProfileHobbies() {
    const [hobby, setHobby] = useState(null);

    useEffect(() => {
        const fetchHobby = async () => {
            try {
                const userId = 1;
                const response = await fetch(`http://localhost:3000/hobbies/${userId}`);
                const data = await response.json();
                setHobby(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchHobby();
    }, []);

    return (
        <div className="default-card">
            <h2>Hobby del usuario</h2>
            {hobby && (
                <div>
                    <p>{hobby.hobby_name}</p>
                    <p>{hobby.description}</p>
                    {/* Otras propiedades del hobby */}
                </div>
            )}
        </div>
    );
}

export default ProfileHobbies;