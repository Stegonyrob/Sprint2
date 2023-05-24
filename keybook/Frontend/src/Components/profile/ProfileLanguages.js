import React, { useState, useEffect } from 'react';

function ProfileLanguajes() {
    const [languages, setLanguages] = useState(null);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const userId = 1;
                const response = await fetch(`http://localhost:3000/languages/${userId}`);
                const data = await response.json();
                setLanguages(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLanguages();
    }, []);

    return (
        <div className="default-card">
            <h2>Idiomas</h2>
            {languages && (
                <div>
                    <p>{languages.language_name}</p>
                </div>
            )}
        </div>
    );
}

export default ProfileLanguajes;