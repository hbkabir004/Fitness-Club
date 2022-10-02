import React from 'react';
import Cards from '../Cards/Cards';
import Side from '../Side/Side';
import './Home.css';

const Home = () => {
    // const [time, setTime] = useState([]);
    return (
        <div className='home-container'>
            <Cards></Cards>
            <Side></Side>
        </div>
    );
};

export default Home;