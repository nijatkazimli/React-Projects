import React from 'react';
import { useParams } from 'react-router-dom';
import Error404Page from './Error404Page';

const CarDetailsPage = ({ cars }) => {
    const { id } = useParams();
    const car = cars.find((car) => car.id === parseInt(id, 10));

    if (!car) {
        return <Error404Page />;
    }

    return (
        <div>
            <h2>Details</h2>
            <p>ID: {car.id}</p>
            <p>Name: {car.name}</p>
            <p>Price Per Day: {car.pricePerDay}</p>
            <p>Doors: {car.doors}</p>
            <p>AC: {car.AC ? "Present" : "Not present"}</p>
            <img src={car.image} alt={car.name}></img>
        </div>
    );
};

export default CarDetailsPage;