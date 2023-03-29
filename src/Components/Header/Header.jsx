import React from 'react';

const Header = () => {
    return (
       <nav className='navbar bg-ligh'>
            <div className='container-fluid'>
                <a className='navbar-brand' href="">Home</a>
                <form className='d-flex' action="">
                    <input className='form-control me-2' placeholder="Search"  type="search" />
                    <button className='btn btn-outline-success'>Search</button>
                </form>
            </div>
       </nav>
    );
};

export default Header;