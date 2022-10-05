import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Side.css';

const Side = ({ timeSum }) => {
    let [breaktime, setbreak] = useState(0);
    if(breaktime)
    localStorage.setItem('breaktime', breaktime);
    useEffect(()=>{
        setbreak(localStorage.getItem('breaktime'));
    }, []);

    const notify = () => toast("Activity Completed!", {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    return (
        <div className='side-container'>
            <div className='my-info'>
                <div>
                    <img className='side-img' src="https://hbkabir004.github.io/assets/img/sample/abir.png" alt="" />
                </div>
                <div>
                    <h4>Abir Khan</h4>
                    <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                    <small style={{ marginLeft: '10px' }}>Khulna, Bangladesh</small>
                </div>
            </div>
            <div className='info-container'>
                <div>
                    <div className='info'>
                        <h4>66</h4>
                        <p>kg</p>
                    </div>
                    <h4 className='sub-info'>Weight</h4>
                </div>
                <div>
                    <div className='info'>
                        <h4>5.10</h4>
                        <p>kg</p>
                    </div>
                    <h4 className='sub-info'>Height</h4>
                </div>
                <div>
                    <div className='info'>
                        <h4>24</h4>
                        <p>yrs</p>
                    </div>
                    <h4 className='sub-info'>Age</h4>
                </div>

            </div>
            <div style={{ marginTop: '20px' }}>
                <h4 style={{ marginLeft: '30px' }}>Add a break</h4>
                <div className='break-container' >
                    <button className='btn-break' onClick={() => setbreak(10)}>10<span>s</span></button>
                    <button className='btn-break' onClick={() => setbreak(20)}>20<span>s</span></button>
                    <button className='btn-break' onClick={() => setbreak(30)}>30<span>s</span></button>
                    <button className='btn-break' onClick={() => setbreak(40)}>40<span>s</span></button>
                    <button className='btn-break' onClick={() => setbreak(50)}>50<span>s</span></button>
                </div>
            </div>

            <div style={{ margin: '20px 0' }}>
                <h4 style={{ marginLeft: '30px' }}>Exercise Details</h4>
                <div className='exercise'>
                    <h5 className='exercise-info'>Exercise time: {timeSum} seconds </h5>
                </div>
                <div className='exercise'>
                    <h5 className='exercise-info'>Break time: {breaktime} seconds</h5>
                </div>
                <div>
                <button onClick={notify} className='btn-complete'>Activity Completed</button>
                <ToastContainer />
                </div>
               
            </div>
        </div>
    );
};

export default Side;