import { Link, Outlet } from 'react-router-dom';
import './CarsPage.css';

const CarsPage = ({ cars }) => {
    return (
        <div className="car-list">
            <h2>Car List</h2>
            <ol>
                {cars.map((car) => (
                    <li key={car.id} className="list-item">
                        <span>{car.name}</span>
                        <Link to={`/cars/${car.id}`}>View details</Link>
                    </li>
                ))}
            </ol>
            <Link to="/cars/new" className="add-button">
                Add New Car
            </Link>
            <Outlet />
        </div>
    );
};

export default CarsPage;
