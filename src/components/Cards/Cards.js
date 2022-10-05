import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Card from '../Card/Card';
import Side from '../Side/Side';
import './Cards.css';

const Cards = () => {
    const [activities, setActivities] = useState([]);
    const [Times, settime] = useState(0);

    const handleClick = (T_time) => {
        // let newtimee = [];
        // newtimee = [...Times];
        // newtimee.push(T_time);
        // console.log(newtimee);
        console.log(Times);
        const newtime = Times + T_time;
        settime(newtime);
    }

    useEffect(() => {
        fetch(`activities.json`)
            .then(res => res.json())
            .then(data => setActivities(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className='home-container'>
            <div>
                <div className='header'>
                    <img src="https://img.freepik.com/free-vector/bodybuilders-fitness-club-logo_1284-45671.jpg?w=826&t=st=1664388033~exp=1664388633~hmac=bec7e0b6afe11d136ce022ebab92f5abca46dc8b1981f6fbe30d3da7c17616d8" alt="" />
                    <h1>Aungstrome Fitness Zone</h1>
                </div>
                <div className='card'>
                    {
                        activities.map(activity => <Card
                            key={activity.id}
                            activity={activity}
                            handleClick={handleClick}
                        ></Card>)
                    }
                </div>
                <Blog></Blog>
            </div>
            <Side timeSum={Times}></Side>
        </div>
    );
};

export default Cards;