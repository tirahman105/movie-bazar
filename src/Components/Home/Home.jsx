import React from 'react';



const Home = () => {
    return (
        <div>
            <div className="movie-container">
                <div className="movie-card card text-center w-100 m-auto">
                    <div className="movie-poster w-50 m-auto">
                        <img className='w-75' src="https://c8.alamy.com/comp/C2WJYB/the-dark-knight-poster-display-at-the-arclight-theater-los-angeles-C2WJYB.jpg" alt="" />
                    </div>
                    <h3>Movie Name</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, magnam?</p>
                    <div className="time-and-rating d-flex justify-content-around">
                        <p>Watch time</p>
                        <p>Rating</p>
                    </div>
                    <button className='btn btn-info w-75 m-auto'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Home;