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
        <>
            {languages && (
                <div class="default-card languages">
                    <h4>
                        <i class="fa-solid fa-language icon" title="Idiomas"></i>
                        IDIOMAS
                    </h4>
                    <ul class="profile-data">
                        <a>
                            Idioma
                            <p>{languages.language_name}</p>
                            <p>Nivel</p>
                        </a>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileLanguajes;