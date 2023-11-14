import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCarPage = ({ cars, setCars }) => {
    const [newCarName, setNewCarName] = useState('');
    const navigate = useNavigate();

    const handleSave = () => {
        if (newCarName.trim() !== '') {
            const newCar = {
                id: cars.length + 1,
                name: newCarName,
            };
    
            setCars([...cars, newCar]);
            navigate(-1);
        }
    };

    return (
        <div>
            <label>
                Car Name:
                <input
                type="text"
                value={newCarName}
                onChange={(e) => setNewCarName(e.target.value)}
                />
            </label>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default AddCarPage;
