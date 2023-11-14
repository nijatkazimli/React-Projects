import { Link, Outlet } from "react-router-dom";

const CarsPage = ({ cars }) => {
    return (
        <div>
            <ol>
                {cars.map((car) => (
                    <li key={car.id}>{car.name}</li>
                ))}
            </ol>
            <Link to="/cars/new">Add new</Link>
            <Outlet />
        </div>
    )
}

export default CarsPage;