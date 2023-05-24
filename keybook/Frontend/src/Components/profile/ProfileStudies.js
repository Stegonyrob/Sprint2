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
        <div className="default-card">
            <h2>Formación</h2>
            {studies && (
                <div>
                    <p>{studies.studies_course}</p>
                    <p>{studies.studies_date}</p>
                </div>
            )}
        </div>
    );
}

export default ProfileStudies;