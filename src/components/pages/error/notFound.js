import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="bg-gray-100 h-screen flex justify-center items-center">
            <div className="text-center">
                <Icon icon="healthicons:not-ok" className="mx-auto text-9xl" />
                <h6 className="text-4xl font-bold text-gray-400">Page Not Found</h6>
                <p className="text-gray-600 py-1">The page your are looking for doesn't exist</p>
                <div className="py-2">
                    <Link to="/"> <button className="text-1xl py-2 font-semibold px-5">Go Back Home</button></Link>

                </div>
            </div>

        </div>
    )
}
export default NotFound;