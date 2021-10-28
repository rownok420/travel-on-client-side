import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/404.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className='text-center'>
            <div className='container my-5'>
            <h1>
                Something went wrong,<span className='text'> Page not found!</span>
            </h1>
            <div>
                <img src={img} className='w-50 p-5 notFound-img' alt="" />
            </div>
            <Link to="/home">
                <button className="home-button">Go to Home</button>
            </Link>
        </div>
        </div>
        </div>
    );
};

export default NotFound;