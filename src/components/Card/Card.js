import React from 'react';
import './Card.css';

const Card = (props) => {
    const {handleClick, activity} = props;
    const {name, para, time, age, img} = activity;
    return (
        <div className='card-container'>
            <img className='image' src={img} alt="" srcset="" />
            <div>
                <h2>{name}</h2>
                <p style={{width:'300px'}}>{para}</p>
                <h5>For Age: {age}</h5>
                <h5>Time required: {time} seconds</h5>
            </div>
            <button onClick={()=>handleClick(time)} className='btn-add'>Add to list</button>
        </div>
    );
};

export default Card;