import React, { useState, useEffect } from 'react';

function ProfileStudies() {
    const [studies, setStudie] = useState(null);

    useEffect(() => {
        const fetchStudie = async () => {
            try {
                const userId = 1;
                const response = await fetch(`http://localhost:3000/studies/${userId}`);
                const data = await response.json();
                setStudie(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStudie();
    }, []);

    return (
        <>
            {studies && (
                <div class="default-card education">
                    <h4>
                        <i class="fa-solid fa-user-graduate icon" title="Formacion"></i>
                        FORMACION
                    </h4>
                    <ul class="profile-data">
                        <a id="formacion">
                            <p>Títulación</p>
                            <p>{studies.studies_course}</p>
                            <p>{studies.studies_date}</p>
                        </a>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileStudies;