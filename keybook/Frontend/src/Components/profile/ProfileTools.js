import React, { useState, useEffect } from 'react';

function ProfileTools() {
    const [Tools, setTools] = useState(null);

    useEffect(() => {
        const fetchTools = async () => {
            try {
                const userId = 1;
                const response = await fetch(`http://localhost:3000/tools/${userId}`);
                const data = await response.json();
                setTools(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTools();
    }, []);

    return (
        <div className="default-card">
            <h2>Herramientas</h2>
            {Tools && (
                <div>
                    <p>{Tools.tools_name}</p>
                </div>
            )}
        </div>
    );
}

export default ProfileTools;