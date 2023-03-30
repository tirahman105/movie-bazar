import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SideCart = ({watchTime}) => {

    const[time, setTime] = useState(watchTime);
    const[breakTime, setBreakTime] = useState(0);


    const handleBreakTime = (bt) => {
        localStorage.setItem("breakTime", bt);
        setBreakTime(bt);
    }


    const handleComplete = () =>{
        toast("Woo so easy!");
    }

    useEffect(()=> {
        const getWatchTimeFromStorage = localStorage.getItem("watchTime");
        setTime(getWatchTimeFromStorage);
        const getBreakTimeFromStorage = localStorage.getItem("breakTime");
        setBreakTime(getBreakTimeFromStorage);
    },[watchTime])
    
    return (
        <div className='sticky-top'>
            <h1>My cart</h1>
            <div className="text-center mt-5">
                <p>Total Watch time</p>
                <input type="text" value={time} disabled />
            </div>
            <h5 className='mt-5'>Add Break Time</h5>
            <button onClick={()=>handleBreakTime(15)} className='w-25 btn-circle m-1 btn btn-info'>15</button>
            <button onClick={()=>handleBreakTime(20)} className='w-25 btn-circle m-1 btn btn-warning'>20</button>
            <button onClick={()=>handleBreakTime(25)} className='w-25 btn-circle m-1 btn btn-danger'>25</button>

            <input type="text" value={breakTime} disabled />
            <button onClick={handleComplete} className='mt-5 btn btn-info w-100'>Complete</button>
        </div>
    );
};

export default SideCart;