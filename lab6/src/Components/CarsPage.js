import carData from '../cars.json'

const CarsPage = () => {
    return (
        <div>
            <ol>
                {carData.map((car) => (
                    <li key={car.id}>{car.name}</li>
                ))}
            </ol>
        </div>
    )
}

export default CarsPage;